import Link from "next/link";
import Post from "../components/post";
import { getAllFilesMetadata } from "../lib/mdx";

export default function Blog({ posts }) {
  return (
    <main className="w-11/12 mt-10 md:w-8/12 lg:w-5/12 mx-auto min-h-[calc(100vh_-_96px)] lg:min-h-[calc(100vh_-_96px)]">
      <section id="last-blogs" className="mb-20">
        <Link href="/">
          <a className="text-xl mb-5 inline-block text-blue-700">
            {"<"} Volver al inicio{" "}
          </a>
        </Link>
        <h3 className="text-3xl font-bold mb-5">Todos los posts</h3>
        <div>
          {posts.map((post, index) => (
            <Post data={post} key={index} desc={true} />
          ))}
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  console.log(posts);
  return { props: { posts } };
}
