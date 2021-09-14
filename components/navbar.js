import { Container, Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className="border-bottom">
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <a className="text-decoration-none text-white bg-dark p-2 rounded font-weight-bold">
              JordanDev
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav" className="justify-content-end">
          <Nav.Item>
            <Nav.Link>
              <Link href="/aboutme">
                <a className="text-black text-decoration-none">Sobre mí</a>
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link href="/proyects">
                <a className="text-black text-decoration-none">Proyectos</a>
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link href="/blog">
                <a className="text-black text-decoration-none">Blog</a>
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
