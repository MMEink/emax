import BlackBanner from "../BlackBanner";
import { Row, Button } from "react-bootstrap";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import ContactForm from "../ContactForm";
import LogoCarousel from "../LogoCarousel";
import PromiseSection from "./PromiseSection";
import PortfolioSection from "../Portfolio/PortfolioSection";
import { portfolio_data, services } from "../data";
import "../css/services-aboutuspage.css";
import { ContentsSection, ServicesSubheader, WaveButton } from "../styled";
import { Helmet } from "react-helmet";

export default function WebDevelopmentView() {
  const [block_section, setBlockSection] = useState(
    services.find((s) => s.name == "Web Development").blocks
  );
  return (
    <Row>
      <Helmet>
        <title>
          Professional Web Development and Design Services | E-Max Interactive
        </title>
        <meta
          name="description"
          content="Elevate your company’s online presence with E-Max Interactive’s comprehensive web development services. Contact us today for personalized web design solutions."
        />
      </Helmet>
      <div className="header services_header">
        <h1 className="pageTitle">Web Development</h1>
        <div className="arrowContainer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ContentsSection>
        <div className="text">
          <ServicesSubheader>Services</ServicesSubheader>
          <h2>Beautiful Websites</h2>
          <p className="paragraph">
            Web development has become an essential business tool that can
            provide countless opportunities for marketing to customers and
            keeping them informed. It presents versatile means of reaching
            clients, as well as tracking customer engagement and analytics.
            Having an established web presence enables companies to take
            advantage of numerous online tools that drive leads and growth for
            the long-term.
          </p>
          <p className="paragraph">
            At E-Max Interactive, we use our expertise to ensure that your
            website has the desired impact. Our team of web developers and
            designers specialize in creating visually appealing, fast loading
            websites with SEO-friendly content. Our web development services
            include website design, website development, and website
            maintenance. We take a collaborative approach to our projects,
            working closely with our clients to understand their vision and
            bring it to life.
          </p>
          <HashLink to="#contact">
            <WaveButton>
              <span>Get Started</span>
              <div class="wave"></div>
            </WaveButton>
          </HashLink>
        </div>
        <div className="images">
          <img
            src={require(`./images/Web-New-Left.png`)}
            alt="image1"
            className="left_image fadeInUp"
          />
          <img
            src={require(`./images/Web-New-Right.png`)}
            alt="image2"
            className="right_image fadeInUp"
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