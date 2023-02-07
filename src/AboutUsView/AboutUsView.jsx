import BlackBanner from "../BlackBanner";
import { Row, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./AboutUsView.css";
import ContactForm from "../ContactForm";
import LogoCarousel from "../LogoCarousel";

function AboutUsView() {
  return (
    <Row>
      <div className="header aboutPg">
        <h1 className="pageTitle">About Us</h1>
        <div className="arrowContainer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <LogoCarousel />
      <BlackBanner />
      <ContactForm />
    </Row>
  );
}

export default AboutUsView;
