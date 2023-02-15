import BlackBanner from "../BlackBanner";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import ContactForm from "../ContactForm";
import LogoCarousel from "../LogoCarousel";
import { Helmet } from "react-helmet";
import PortfolioSection from "../Portfolio/PortfolioSection";
import PromiseSection from "./PromiseSection";
import { services, portfolio_data } from "../data";
import "../css/services-aboutuspage.css";
import { ContentsSection, ServicesSubheader, WaveButton } from "../styled";
import Aos from "aos";
import "aos/dist/aos.css";

export default function BrandingView() {
  Aos.init();

  const [block_section, setBlockSection] = useState(
    services.find((s) => s.name === "Branding").blocks
  );
  return (
    <Row>
      <Helmet>
        <title>
          Professional Business Branding Services | E-Max Interactive
        </title>
        <meta
          name="description"
          content="Get professional branding services tailored to your service business from E-Max Interactive. We'll help you reach your desired objectives and maximize brand exposure."
        />
      </Helmet>
      <div className="header services_header">
        <h1 className="pageTitle">Branding Services</h1>
        <HashLink to="#branding-contents">
          <div className="arrowContainer">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </HashLink>
      </div>
      <ContentsSection id="branding-contents">
        <div className="text">
          <ServicesSubheader>Services</ServicesSubheader>
          <h2>Develop Your Brand</h2>
          <p className="paragraph">
            A strong brand not only creates awareness about your services, but
            also establishes trust and loyalty from your clientele. Branding can
            include logo design, creating a unique identity, or formulating a
            messaging and communications strategy to capture the desired
            audience's attention.
          </p>
          <p className="paragraph">
            Finding a trusted partner that has a deep understanding of
            cutting-edge trends and marketing principles can help your brand
            become visible in the market and stay ahead of the competition.
          </p>
          <p className="paragraph">
            E-Max Interactive has over 25 years of experience in creating and
            curating successful branding campaigns. Our branding services
            include logo design, brand messaging, and brand guidelines. We work
            closely with our clients to understand their unique needs and goals,
            and help create a brand that accurately represents their business.
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
            src={require(`./images/Branding-Left.png`)}
            alt="image1"
            data-aos="fadeInUp"
            data-aos-delay="1500"
            data-aos-duration="2500"
            data-aos-once="true"
            className="left_image"
          />
          <img
            src={require(`./images/Branding-Right.png`)}
            alt="image2"
            data-aos="fadeInUp"
            data-aos-delay="500"
            data-aos-duration="2500"
            data-aos-once="true"
            className="right_image"
          />
        </div>
      </ContentsSection>
      <PromiseSection block_section={block_section} />
      <PortfolioSection portfolio={portfolio_data.slice(0, 8)} />
      <LogoCarousel />
      <BlackBanner />
      <ContactForm />
    </Row>
  );
}
