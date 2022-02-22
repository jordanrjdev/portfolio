import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../lib/mdx";
import Link from "next/link";

export default function Post({ source, frontmatter }) {
  return (
    <main className="prose max-w-full w-11/12 my-10 md:w-8/12 lg:w-5/12 mx-auto min-h-[calc(100vh_-_96px)] lg:min-h-[calc(100vh_-_96px)]">
      <Link href="/blog">
        <a className="text-xl mb-5 inline-block text-blue-700">{"<"} Volver</a>
      </Link>
      <MDXRemote {...source} />
    </main>
  );
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug);
  return {
    props: { source, frontmatter },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles();
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
