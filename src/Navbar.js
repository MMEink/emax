import logo from "./images/E-MaxHorizontal.svg";
import { Navbar, Nav, Button, Col } from "react-bootstrap";
import plane from "./images/plane.svg";

export default function NavbarView() {
  return (
    <Navbar className="main-nav" sticky="top" variant="light" expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" className="navbar-logo" />
      </Navbar.Brand>
      <Nav.Link href="#contact">
        <Button className="contactBtn">
          <span className="deviceToggle">CONTACT</span>
          <img src={plane} alt="planeIcon" />
        </Button>
      </Nav.Link>
    </Navbar>
  );
}
