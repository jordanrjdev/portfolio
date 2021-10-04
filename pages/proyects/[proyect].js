import { Col, Container, Row, Button } from "react-bootstrap";
import { proyects } from "../../proyects";
import { FaEye, FaGithub } from "react-icons/fa";

export default function Proyect({ proyect }) {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>{proyect.name}</h1>
          <p className="text-justify">{proyect.description}</p>
          <p>
            Tecnologias usadas:{" "}
            <strong>
              {proyect.technologies.map((tech) => tech).join(", ")}
            </strong>
          </p>
          <Button variant="primary" className="me-2">
            <a
              className="text-white text-decoration-none"
              href={proyect.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en github <FaGithub />
            </a>
          </Button>
          <Button variant="secondary">
            {proyect.demo ? (
              <a
                className="text-white text-decoration-none"
                href={proyect.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver demo <FaEye />
              </a>
            ) : null}
          </Button>
        </Col>
      </Row>
    </Container>
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
