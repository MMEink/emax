import logo from "./images/E-MaxHorizontal.svg";
import { Navbar, Nav, Button } from "react-bootstrap";
import plane from "./images/plane.svg";

export default function NavbarView() {
  return (
    <Navbar sticky="top" variant="light" expand="lg">
      <div className="main-nav">
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="navbar-logo" />
        </Navbar.Brand>
        <div className="navBtns">
          <Nav.Link>
            <Button className="navBtn">
              <span className="deviceToggle">ABOUT US</span>
              <img src={plane} alt="planeIcon" />
            </Button>
          </Nav.Link>
          <Nav.Link href="#contact">
            <Button className="navBtn">
              <span className="deviceToggle">CONTACT</span>
              <img src={plane} alt="planeIcon" />
            </Button>
          </Nav.Link>
        </div>
      </div>
    </Navbar>
  );
}
