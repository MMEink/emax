import BlackBanner from "../BlackBanner";
import { Row } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import ContactForm from "../ContactForm";
import LogoCarousel from "../LogoCarousel";
import PortfolioSection from "../Portfolio/PortfolioSection";
import { portfolio_data } from "../data";
import placeholder_lf from "../ServicePages/images/Web-New-Left.png";
import placeholder_rt from "../ServicePages/images/Web-New-Right.png";
import "../css/services-aboutuspage.css";
import { ContentsSection, WaveButton } from "../styled";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutUsView() {
  Aos.init();
  return (
    <Row>
      <div className="header aboutPg">
        <h1 className="pageTitle">About Us</h1>
        <HashLink to="#aboutuspage-contents">
          <div className="arrowContainer">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </HashLink>
      </div>
      <ContentsSection id="aboutuspage-contents">
        <div className="text" style={{ marginTop: "3rem" }}>
          <h2>Get to Know Us Better</h2>
          <p className="paragraph">
            At E-Max Interactive we have over three decades of marketing
            experience for the service industry. Designed as a boutique agency,
            we are committed to expanding your brand's reach in the marketplace.
          </p>
          <p className="paragraph">
            E-Max provides all the marketing services your business needs, from
            graphic design, photography and video production to social media
            marketing and website development.
          </p>
          <p className="paragraph">
            Our proven track record of successful marketing strategies provides
            us with the knowledge and skills to bring your brand to life.
          </p>
          <p className="paragraph">
            Let our team of experts elevate your business to new levels!
          </p>
          <HashLink to="#contact">
            <WaveButton>
              <span>Get Started</span>
              <div className="wave"></div>
            </WaveButton>
          </HashLink>
        </div>
        <div className="images">
          <img
            src={placeholder_lf}
            alt="image1"
            data-aos="fadeInUp"
            data-aos-delay="1500"
            data-aos-duration="2500"
            data-aos-once="true"
            className="left_image"
          />
          <img
            src={placeholder_rt}
            alt="image2"
            data-aos="fadeInUp"
            data-aos-delay="500"
            data-aos-duration="2500"
            data-aos-once="true"
            className="right_image"
          />
        </div>
      </ContentsSection>
      <PortfolioSection portfolio={portfolio_data.slice(0, 8)} />
      <LogoCarousel />
      <BlackBanner />
      <ContactForm />
    </Row>
  );
}

export default AboutUsView;
