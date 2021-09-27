import Head from "next/head";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import { getAllFilesMetadata } from "../lib/mdx";

export default function Blog({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <main>
        <Container>
          <Row className="mb-4">
            <h2 className="my-4 fs-2 fw-bold">Bienvenido al Blog!!</h2>
            {posts.map((post) => (
              <Link href={`/${post.slug}`}>
                <Col
                  sm={12}
                  md={11}
                  key={post.slug}
                  className="mb-4 border rounded p-3"
                  style={{ cursor: "pointer" }}
                >
                  <a className="text-decoration-none fs-4">{post.title}</a>
                  <p>{post.date}</p>
                  <p>{post.description}</p>
                </Col>
              </Link>
            ))}
          </Row>
        </Container>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  return { props: { posts } };
}
