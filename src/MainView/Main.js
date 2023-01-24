import SwiperSection from "./SwiperSection";
import AboutUsSection from "./AboutUsSection";
import BlackBanner from "../BlackBanner";
import ContactForm from "./ContactForm";
import { Row, Button } from "react-bootstrap";
import { useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import LogoCarousel from "./LogoCarousel";

function MainView() {
  return (
    <Row>
      <SwiperSection />
      <AboutUsSection />
      <LogoCarousel />
      <BlackBanner />
      <ContactForm />
    </Row>
  );
}

export default MainView;
