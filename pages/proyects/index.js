import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { proyects } from "../../proyects";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
export default function Proyects() {
  return (
    <div>
      <Head>
        <title>Proyectos</title>
      </Head>
      <main>
        <Container className="my-4">
          <Row>
            <Col xs={12}>
              <h1>Proyectos</h1>
            </Col>
            <Col xs={12}>
              <p>
                Todos estos proyectos se pueden mejorar mucho mas cuando tengo
                tiempo les dedico tiempo a mejorarlos y añadir nuevas
                funcionalidades.
              </p>
            </Col>
          </Row>
          <Row>
            <div className={styles.grid}>
              {proyects.map((proyect, index) => (
                <Link href={`/proyects/${proyect.slug}`}>
                  <a className={styles.card}>
                    <h2>{proyect.name} </h2>
                    <p
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {proyect.description}
                    </p>
                  </a>
                </Link>
              ))}
            </div>
          </Row>
        </Container>
      </main>
    </div>
  );
}
