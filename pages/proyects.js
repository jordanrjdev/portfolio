import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

export default function Proyects() {
  return (
    <div>
      <Head>
        <title>Proyectos</title>
      </Head>
      <main>
        <Container className="my-4">
          <Row>
            <Col>
              <h1>
                Proyectos
              </h1>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
