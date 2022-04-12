import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Post from "../components/post";
import Proyect from "../components/proyect";
import { Dev, Medium } from "../components/UI/Icons";
import { getAllFilesMetadata } from "../lib/mdx";
import { proyects } from "../proyects";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Portafolio - JordanDev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-11/12 my-10 md:w-8/12 lg:w-5/12 mx-auto min-h-[calc(100vh_-_96px)] lg:min-h-[calc(100vh_-_96px)]">
        <section id="profile" className="mb-5">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-9">
              <h1 className="text-5xl font-bold mb-2">
                Jordan Jaramillo Ureña
              </h1>
              <p className="text-xl text-gray-700 mb-4">
                Software Developer | React.js | Vue.js | Node.js | Ruby on Rails
                | Laravel
              </p>
              <p className="text-xl">
                I am passionate about technology, I discovered programming when
                I was 15 years old, so I specialized in web development and
                currently my favorite technologies are ReactJS, NodeJS and
                Laravel
              </p>
              <span className="mt-5 block">Follow me:</span>
              <div className="flex justify-start items-center space-x-5">
                <Link href="https://dev.to/jordandev">
                  <a
                    target="_blank"
                    className="flex hover:text-gray-900 justify-center items-center space-x-2 text-gray-600"
                  >
                    <Dev width="40px" height="40px" />
                  </a>
                </Link>
                <Link href="https://medium.com/@jordanrjdev">
                  <a
                    target="_blank"
                    className="flex hover:text-gray-900 justify-center items-center space-x-2 text-gray-600"
                  >
                    <Medium width="40px" height="40px" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-span-3">
              <Image
                src="/profile.jpeg"
                alt="profile"
                width={150}
                height={150}
                className="rounded-full text-center"
              />
            </div>
          </div>
        </section>
        <section id="last-blogs" className="mb-20">
          <h3 className="text-3xl font-bold mb-5">Últimos blogs</h3>
          <div>
            {posts.map((post, index) => (
              <Post data={post} key={index} />
            ))}
          </div>
          <Link href="/blog">
            <a className="text-xl text-blue-700">Todos los posts {">"}</a>
          </Link>
        </section>
        <section id="last-proyects" className="mb-20">
          <h3 className="text-3xl font-bold mb-5">Últimos proyectos</h3>
          <div className="mb-5 w-full grid grid-cols-2 gap-5">
            {proyects.slice(0, 5).map((proyect, index) => (
              <Proyect data={proyect} key={index} />
            ))}
          </div>
          <Link href="/proyects">
            <a className="text-xl text-blue-700">Todos los proyectos {">"}</a>
          </Link>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata(5);
  return { props: { posts } };
}
