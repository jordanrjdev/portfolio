import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)
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
          <Col className="d-flex justify-content-between" md={4} lg={2}> 
            <Link className="flex-shrink" href="https://twitter.com/jordanrjdev">
              <a target="_blank" rel="noreferrer" className="text-black">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </Link>
            
            <Link href="https://instagram.com/vednadroj">
              <a target="_blank" rel="noreferrer" className="text-black d-block ms-2">
                <FontAwesomeIcon icon={["fab", "instagram"]}/>
              </a>
            </Link>
            
            <Link href="https://www.linkedin.com/in/jordanrjdev/">
              <a  target="_blank" rel="noreferrer" className="text-black d-block ms-2">
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} fixedWidth/>
              </a>
            </Link>
            <Link href="https://github.com/jordanrjdev">
              <a  target="_blank" rel="noreferrer" className="text-black d-block ms-2">
                <FontAwesomeIcon icon={["fab", "github"]}  />
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
