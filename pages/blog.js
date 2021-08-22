import Head from "next/head";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import { getAllFilesMetadata } from "../lib/mdx";

export default function Blog({ posts }) {
  return (
    <div>
      <main>
        <Container>
          <Row className="mb-4">
            <h2 className="my-4">Bienvenido al Blog!!</h2>
            {posts.map((post) => (
              <Col sm={12} md={6} lg={3} key={post.slug} className="mb-4">
                <Card
                  style={{
                    minWidth: "17rem",
                    maxWidth: "18rem",
                    margin: "0 auto",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <Link href={`/${post.slug}`}>{post.title}</Link>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {post.date}
                    </Card.Subtitle>
                    <Card.Text>{post.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  console.log(posts);
  return { props: { posts } };
}
