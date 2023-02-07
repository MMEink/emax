import logo from "./images/E-MaxHorizontal.svg";
import { Navbar, Nav, Button, Row} from "react-bootstrap";
import plane from "./images/plane.svg";
import arrow from "./images/1522547488.svg"
import { Link } from "react-router-dom";
import { useState } from "react";
import {DropdownArrow, DropdownArrowContainer, DropdownContainer, NavBtnContainer, Arrow} from './styled'
import { services } from "./data";

export default function NavbarView() {
  const [colorChange, setColorChange] = useState(false);
  const [dropdownToggle, setDropdownToggle] = useState(false);
  let filter = {
    filter:
      "invert(96%) sepia(0%) saturate(16%) hue-rotate(282deg) brightness(103%) contrast(105%)",
  };
  return (
    <Navbar sticky="top" variant="light" expand="lg">
      <div className="main-nav">
        <Navbar.Brand>
          <Link to={"/"}>
            <img src={logo} alt="logo" className="navbar-logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="navBtns">
          <NavBtnContainer>
            <Link to={"/portfolio"}>
              <Button className="navBtn">
                <span>Portfolio</span>
              </Button>
            </Link>
          </NavBtnContainer>
          <NavBtnContainer onMouseEnter={()=>setDropdownToggle(true)}>
            { window.innerWidth >= 900 ? <Link to={"/ourservices"}>
              <Button className="navBtn">
                <span>Services</span>
              </Button>
            </Link>:<Button className="navBtn" onClick={()=>dropdownToggle?setDropdownToggle(false):setDropdownToggle(true)}>
                <span>Services</span><img src={arrow} alt="arrow" style={dropdownToggle?{transform: 'rotate(58deg)'}:{}}></img>
              </Button>}
            {dropdownToggle && <DropdownContainer onMouseLeave={()=>setDropdownToggle(false)}><DropdownArrow /><div><ul>{window.innerWidth<=899 && <Link to={"/ourservices"}><li>All Services</li></Link>}{services.map((service, i)=><Link to={`/${service.link}`}><li key={i}>{service.name}</li></Link>)}</ul></div></DropdownContainer>}
            </NavBtnContainer>
            <NavBtnContainer>
            <Link to={"/aboutus"}>
              <Button className="navBtn">
                <span>aboutUs</span>
              </Button>
            </Link>
          </NavBtnContainer>
          <Link to={"/contact"}>
          <div>
            <Button
              className="contactBtn"
              onMouseEnter={() => setColorChange(true)}
              onMouseLeave={() => setColorChange(false)}
            >
              <span>contact</span>
              <img
                src={plane}
                alt="planeIcon"
                style={colorChange ? filter : {}}
              />
            </Button>
          </div>
          </Link>
        </Navbar.Collapse>
      </div>
    </Navbar>



  );
}
