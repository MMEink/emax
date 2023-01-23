import NavbarView from "./Navbar";
import SwiperSection from "./SwiperSection";
import AboutUsSection from "./AboutUsSection";
import BlackBanner from "./BlackBanner";
import ContactForm from "./ContactForm";
import { Row, Button } from "react-bootstrap";
import { useState } from "react";
import "./App.css";
import LogoCarousel from "./LogoCarousel";

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
    <Row className="App">
      <NavbarView />
      <SwiperSection />
      <AboutUsSection />
      <LogoCarousel />
      <BlackBanner />
      <ContactForm />
      <Button
        className="scrollUpBtn fixed-bottom"
        style={{ display: visible ? "flex" : "none" }}
        onClick={() => onScrollUpClick()}
      >
        &#10094;
      </Button>
    </Row>
  );
}

export default App;
