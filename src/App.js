import NavbarView from "./Navbar";
import MainView from "./MainView/Main";
import AboutUsView from "./AboutUsView/AboutUsView";
import OurServicesView from "./OurServicesView/OurServicesView";
import PortfolioView from "./Portfolio/PortfolioView";
import ContactView from "./ContactView/ContactView";
import BrandingView from "./ServicePages/BrandingView";
import EmailMarketingView from "./ServicePages/EmailMarketingView";
import MediaView from "./ServicePages/MediaView";
import PrintMarketingView from "./ServicePages/PrintMarketingView";
import SEOandSEMView from "./ServicePages/SEOandSEMView";
import WebDevelopmentView from "./ServicePages/WebDevelopmentView";
import NotFoundView from "./NotFoundView/NotFoundView";
import ThankyouView from "./ThankyouView/ThankyouView";
import SocialMediaView from "./ServicePages/SocialMediaView";
import ScrollToTop from "./ScrollToTop";
import { Row, Button } from "react-bootstrap";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/App.css";

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
      <ScrollToTop />
      <NavbarView />
      <Row>
        <Routes>
          <Route path="/">
            <Route index element={<MainView />}></Route>
            <Route path="aboutus" element={<AboutUsView />}></Route>
            <Route path="ourservices" element={<OurServicesView />}></Route>
            <Route path="portfolio" element={<PortfolioView />}></Route>
            <Route path="contact" element={<ContactView />}></Route>
            <Route path="branding" element={<BrandingView />}></Route>
            <Route
              path="webDevelopment"
              element={<WebDevelopmentView />}
            ></Route>
            <Route path="SEOandSEM" element={<SEOandSEMView />}></Route>
            <Route path="*" element={<NotFoundView />}></Route>
            <Route path="thankyou" element={<ThankyouView />}></Route>
            <Route path="media" element={<MediaView />}></Route>
            <Route path="social-media" element={<SocialMediaView />}></Route>
            <Route
              path="email-marketing"
              element={<EmailMarketingView />}
            ></Route>
            <Route
              path="print-marketing"
              element={<PrintMarketingView />}
            ></Route>
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
