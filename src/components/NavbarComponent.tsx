import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar expand="md" className="navbar-dark bg-dark sticky-top">
      <Navbar.Brand className="m-3">
        <img src="/assets/images/Spaceflight_Industries_logo.svg.png" alt="logo Spaceflight" id="logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="me-auto mb-2 mb-lg-0">
          <Nav.Item>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/articles" className="nav-link">
              Articles
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarComponent;
