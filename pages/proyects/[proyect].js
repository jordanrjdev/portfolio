import Link from "next/link";
import { proyects } from "../../proyects";
import ButtonBack from "../../components/buttonBack";
import { NotImage } from "../../components/UI/Backgrounds";
import { GithubIcon, Web } from "../../components/UI/Icons";

export default function Proyect({ proyect }) {
  return (
    <main className="w-11/12 my-10 md:w-8/12 lg:w-5/12 mx-auto min-h-[calc(100vh_-_96px)] lg:min-h-[calc(100vh_-_96px)]">
      <ButtonBack route="/proyects" />
      <section id="proyect">
        <p className="text-2xl text-gray-700 my-10">{proyect.description}</p>
        <div className={`relative w-${proyect.image ? 3 : 2}/4 mb-10 mx-auto`}>
          {proyect.image ? (
            <img src={"/proyects/" + proyect.image} alt={proyect.name} />
          ) : (
            <NotImage />
          )}
        </div>
        <p className="font-semibold text-gray-700 text-xl">
          Tecnologías usadas :{" "}
          <span className="font-normal text-blue-700">
            {proyect.technologies.map((tech) => tech).join(", ")}
          </span>
        </p>
        <div className="flex justify-center w-full my-5 space-x-5 items-center">
          <Link href={proyect.repository}>
            <a className="w-fit flex justify-center space-x-2 items-center bg-black text-white px-4 py-3 my-4 rounded">
              <span>Visitar repositorio</span> <GithubIcon />
            </a>
          </Link>
          {proyect.demo && (
            <Link href={proyect.repository}>
              <a className="w-fit flex justify-center space-x-2 items-center bg-blue-500 text-white px-4 py-3 my-4 rounded">
                <span>Visitar demo</span> <Web />
              </a>
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      proyect: proyects.find((proyect) => proyect.slug === params.proyect),
    },
  };
}

export async function getStaticPaths() {
  const paths = proyects.map((proyect) => ({
    params: {
      proyect: proyect.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
