import { Navbar, Container, Nav } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Toggle></Navbar.Toggle>
          <Navbar.Collapse></Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
