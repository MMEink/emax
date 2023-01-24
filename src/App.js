import NavbarView from "./Navbar";
import MainView from "./MainView/Main";
import AboutUsView from "./AboutUsView/AboutUsView";
import OurServicesView from "./OurServicesView/OurServicesView";
import PortfolioView from "./PortfolioView/PortfolioView";
import { Row, Button } from "react-bootstrap";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const onScrollUpClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Router className="App">
      <NavbarView />
      <Row>
        <Routes>
          <Route path="/">
            <Route index element={<MainView />}></Route>
            <Route path="aboutus" element={<AboutUsView />}></Route>
            <Route path="ourservices" element={<OurServicesView />}></Route>
            <Route path="portfolio" element={<PortfolioView />}></Route>
          </Route>
        </Routes>
        <Button
          className="scrollUpBtn fixed-bottom"
          style={{ display: visible ? "flex" : "none" }}
          onClick={() => onScrollUpClick()}
        >
          &#10094;
        </Button>
      </Row>
    </Router>
  );
}

export default App;
