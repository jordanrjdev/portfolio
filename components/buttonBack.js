import Link from "next/link";
import { Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
export default function ButtonBack({ route }) {
  return (
    <Button>
      <Link href={route}>
        <a className="text-decoration-none text-white">
          <FaArrowLeft />
          <span>Back</span>
        </a>
      </Link>
    </Button>
  );
}
