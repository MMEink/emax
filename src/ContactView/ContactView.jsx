import { Row } from "react-bootstrap";
import ContactForm from "../ContactForm";
import { HashLink } from "react-router-hash-link";
import { Helmet, HelmetProvider } from "react-helmet-async";

function ContactView() {
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>
            Contact E-Max Interactive | Professional Marketing Agency
          </title>
          <meta name="description" content="Contact us today to get started." />
        </Helmet>
        <div className="header contactPg">
          <div className="header-contents">
            <h1 className="pageTitle">Contact Us</h1>
            <HashLink to="#contact">
              <div className="arrowContainer">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </HashLink>
          </div>
        </div>
        <ContactForm />
      </Row>
    </HelmetProvider>
  );
}

export default ContactView;
