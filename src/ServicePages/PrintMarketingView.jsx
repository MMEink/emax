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

export default function PrintMarketingView() {
  const [block_section, setBlockSection] = useState(
    services.find((s) => s.name == "Print Marketing").blocks
  );
  return (
    <Row>
      <Helmet>
        <title>Business Print Marketing Services | E-Max Interactive</title>
        <meta
          name="description"
          content="Get the best results from your print marketing efforts with help from E-Max Interactive. We create high-impact and professional print materials to attract and engage customers."
        />
      </Helmet>
      <div className="header services_header">
        <h1 className="pageTitle">Printing Marketing</h1>
        <div className="arrowContainer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ContentsSection>
        <div className="text">
          <ServicesSubheader>Services</ServicesSubheader>
          <h2>Get Noticed</h2>
          <p className="paragraph">
            Print marketing provides a tangible experience to customers that
            can’t be achieved online. From promotional materials like flyers,
            brochures, and business cards to larger-scale displays like posters
            and banners, print is an effective way to reach customers while
            they’re on the go. It’s also a great way to make a big impression at
            trade shows or other events.
          </p>
          <p className="paragraph">
            Using precise and professional language within the print message
            adds credibility as well as creativity. With clever design elements
            and customized branding, your customers can gain insight into who
            you are as a business before they ever step foot in the door.
          </p>
          <p className="paragraph">
            Combined with other forms of digital marketing, print material can
            help you establish and maintain strong relationships with your
            customer base. Our team of print marketing professionals can help
            you create and execute a successful print strategy for your
            business.
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
            src={require(`./images/Print-Left.png`)}
            alt="image1"
            className="left_image fadeInUp"
          />
          <img
            src={require(`./images/Print-Right.png`)}
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
