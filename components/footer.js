import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-top py-4 mt-2">
      <Container>
        <Row>
          <Col xs={12} md={8} lg={10} className="d-flex align-items-center">
            <p className="m-0 p-0">
              Jordan Ruben Jaramillo Ureña | Todos los derechos reservados ©
              2021.
            </p>
          </Col>
          <Col className="d-flex justify-content-between" xs={4} md={4} lg={2}>
            <Link
              className="flex-shrink"
              href="https://twitter.com/jordanrjdev"
            >
              <a className="text-black d-block ms-2">
                <FaTwitter />
              </a>
            </Link>

            <Link href="https://instagram.com/vednadroj">
              <a className="text-black d-block ms-2">
                <FaInstagram />
              </a>
            </Link>

            <Link href="https://www.linkedin.com/in/jordanrjdev/">
              <a className="text-black d-block ms-2">
                <FaLinkedin />
              </a>
            </Link>
            <Link href="https://github.com/jordanrjdev">
              <a className="text-black d-block ms-2">
                <FaGithub />
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
