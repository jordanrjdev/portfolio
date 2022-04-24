import fs, { readdirSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export const getFiles = () => {
  const basePath = path.join(root, "data");
  let directoryContent = fs.readdirSync(basePath);
  let files = directoryContent.filter((filename) => {
    return fs.statSync(`${basePath}/${filename}`).isFile();
  });
  let sorted = files.sort((a, b) => {
    let aStat = fs.statSync(`${basePath}/${a}`),
      bStat = fs.statSync(`${basePath}/${b}`);
    return (
      new Date(bStat.birthtime).getTime() - new Date(aStat.birthtime).getTime()
    );
  });
  return sorted;
};

export const getFileBySlug = async (slug) => {
  const mdxSource = fs.readFileSync(
    path.join(root, "data", slug + ".mdx"),
    "utf8"
  );

  const { data, content } = await matter(mdxSource);
  const source = await serialize(content, {});

  return {
    source,
    frontmatter: { slug, ...data },
  };
};

export const getAllFilesMetadata = (quantity = 0) => {
  let files = getFiles();
  if (quantity > 0) {
    files = files.slice(0, quantity);
  }
  return files.reduce((allPost, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, "data", postSlug),
      "utf8"
    );
    const { data } = matter(mdxSource);
    return [...allPost, { ...data, slug: postSlug.replace(".mdx", "") }];
  }, []);
};
