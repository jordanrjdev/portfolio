import Link from "next/link";
export default function Proyect({ data }) {
  return (
    <Link href={`/proyects/${data.slug}`}>
      <a>
        <div className="w-full col-span-2 lg:col-span-1 font-bold cursor-pointer h-32 lg:h-44 pb-4 px-2 flex flex-col items-center justify-end rounded-md bg-gray-800 box-border text-white">
          <p>{data.name.slice(0, 12) + "..."}</p>
          <p>{data.description.slice(0, 50) + "..."}</p>
        </div>
      </a>
    </Link>
  );
}
