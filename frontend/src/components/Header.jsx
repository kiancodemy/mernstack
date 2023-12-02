import { Navbar, Container, Nav } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">proshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basis-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart /> cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaShoppingCart />
                <FaUser /> sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
