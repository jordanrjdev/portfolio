import { MDXRemote } from "next-mdx-remote";
import { Col, Container, Row } from "react-bootstrap";
import { getFileBySlug, getFiles } from "../lib/mdx";

export default function Post({ source, frontmatter }) {
  console.log(source, frontmatter);
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <MDXRemote {...source} />
        </Col>
      </Row>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug);
  return {
    props: { source, frontmatter },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles();
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
