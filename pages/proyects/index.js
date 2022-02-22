import { proyects } from "../../proyects";
import Link from "next/link";
import Proyect from "../../components/proyect";

export default function Proyects() {
  return (
    <main className="w-11/12 my-10 md:w-8/12 lg:w-5/12 mx-auto min-h-[calc(100vh_-_96px)] lg:min-h-[calc(100vh_-_96px)]">
      <Link href="/">
        <a className="text-xl mb-5 inline-block text-blue-700">
          {"<"} Volver al inicio{" "}
        </a>
      </Link>
      <section id="last-proyects" className="mb-20">
        <h3 className="text-3xl font-bold mb-5">Todos los proyectos</h3>
        <div className="mb-5 w-full grid grid-cols-2 gap-5">
          {proyects.map((proyect, index) => (
            <Proyect data={proyect} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
