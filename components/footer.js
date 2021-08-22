import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-top py-4 mt-2">
      <Container>
        <Row>
          <Col xs={12} md={9} className="d-flex align-items-center">
            <p className="m-0 p-0">
              Jordan Ruben Jaramillo Ureña | Todos los derechos reservados ©
              2021.
            </p>
          </Col>
          <Col className="d-flex justify-content-between" xs={3}>
            <Link href="https://twitter.com/jordanrjdev">
              <a target="_blank" rel="noreferrer" className="text-black">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
              </a>
            </Link>
            <Link href="https://instagram.com/vednadroj">
              <a target="_blank" rel="noreferrer" className="text-black">
                <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/jordanrjdev/">
              <a target="_blank" rel="noreferrer" className="text-black">
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2x" />
              </a>
            </Link>
            <Link href="https://github.com/jordanrjdev">
              <a target="_blank" rel="noreferrer" className="text-black">
                <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
