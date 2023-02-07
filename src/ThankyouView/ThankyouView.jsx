import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm";
import LogoCarousel from "../LogoCarousel";
import BlackBanner from "../BlackBanner";
import { AlertPageSection } from "../styled";

export default function ThankyouView() {
  return (
    <Row>
      <AlertPageSection>
        <h1>Thank you for contacting us.</h1>
        <p class="subheader">We will be in touch shortly</p>
        <div class="material-symbols-outlined">sentiment_satisfied</div>
        <Link to={"/"}>
          <div>Click Here To Go Home</div>
        </Link>
      </AlertPageSection>
      <LogoCarousel />
      <BlackBanner />
      <ContactForm />
    </Row>
  );
}
