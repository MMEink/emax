import BlackBanner from "../BlackBanner";
import { Row, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm";

function ContactView() {
  return (
    <Row>
      <div className="header contactPg">
        <h1 className="pageTitle">Contact Us</h1>
        <div className="arrowContainer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ContactForm />
    </Row>
  );
}

export default ContactView;
