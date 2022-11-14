import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import { Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <NavbarBrand>Jewelers of Parkland</NavbarBrand>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}
