import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { getAllFilesMetadata } from "../lib/mdx";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";

export default function Blog({ posts }) {
  return (
    <main className={styles.container}>
      <Head>
        <title>Blog</title>
      </Head>
      <main>
        <Container>
          <Row className="mb-4">
            <h2 className="my-4 fs-2 fw-bold">Bienvenido al Blog!!</h2>
            {posts.map((post, index) => (
              <Fragment key={index}>
                <Link href={`/${post.slug}`} passHref>
                  <Col
                    sm={12}
                    md={11}
                    className="mb-4 border rounded p-3"
                    style={{ cursor: "pointer" }}
                  >
                    <a className="text-decoration-none fs-4">{post.title}</a>
                    <p>{post.date}</p>
                    <p>{post.description}</p>
                  </Col>
                </Link>
              </Fragment>
            ))}
          </Row>
        </Container>
      </main>
    </main>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  console.log(posts);
  return { props: { posts } };
}
