import { Row } from "react-bootstrap";
import ContactForm from "../ContactForm";
import { HashLink } from "react-router-hash-link";

function ContactView() {
  return (
    <Row>
      <div className="header contactPg">
        <h1 className="pageTitle">Contact Us</h1>
        <HashLink to="#contact">
          <div className="arrowContainer">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </HashLink>
      </div>
      <ContactForm />
    </Row>
  );
}

export default ContactView;
