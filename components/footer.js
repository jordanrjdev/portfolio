import Link from "next/link";
import { Dev } from "./UI/Icons";

export const Footer = () => {
  return (
    <footer className="w-full text-center py-10">
      <p className="text-gray-600">
        Jordan Ruben Jaramillo Ureña @jordanrjdev • Todos los izquierdos
        reservados © {new Date().getFullYear()}.
      </p>
      <Link href="https://dev.to/jordandev">
        <a
          target="_blank"
          className="flex hover:text-gray-900 justify-center items-center space-x-2 text-gray-600"
        >
          <span>Sigueme en</span> <Dev />
        </a>
      </Link>
    </footer>
  );
};
