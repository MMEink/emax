import SwiperSection from "./SwiperSection";
import AboutUsSection from "./AboutUsSection";
import BlackBanner from "../BlackBanner";
import ContactForm from "../ContactForm";
import { Row } from "react-bootstrap";
import LogoCarousel from "../LogoCarousel";

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
