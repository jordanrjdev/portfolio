import Link from "next/link";
export default function ButtonBack({ route }) {
  return (
    <Link href={route}>
      <a className="text-decoration-none inline-block rounded-lg text-xl  font-bold text-blue-700">
        <span>{"<"} Volver</span>
      </a>
    </Link>
  );
}
