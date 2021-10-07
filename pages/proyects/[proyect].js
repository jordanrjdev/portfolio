import Image from "next/image";
import { Col, Container, Row, Button } from "react-bootstrap";
import { proyects } from "../../proyects";
import { FaEye, FaGithub } from "react-icons/fa";
import styles from "../../styles/Home.module.css";
import ButtonBack from "../../components/buttonBack";

export default function Proyect({ proyect }) {
  return (
    <main className={styles.container}>
      <Container>
        <Row>
          <Col>
            <ButtonBack route="/proyects" />
          </Col>
        </Row>
        <Row className="my-4">
          {proyect.image ? (
            <Col xs={12} lg={6}>
              <Image
                src={"/proyects/" + proyect.image}
                alt={proyect.name}
                width={500}
                height={350}
                layout="responsive"
                className="mb-3"
              />
            </Col>
          ) : null}
          <Col xs={12} lg={proyect.image ? 6 : 12}>
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
            {proyect.demo ? (
              <Button variant="secondary">
                <a
                  className="text-white text-decoration-none"
                  href={proyect.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver demo <FaEye />
                </a>
              </Button>
            ) : null}
          </Col>
        </Row>
      </Container>
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
