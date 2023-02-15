import BlackBanner from "../BlackBanner";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import ContactForm from "../ContactForm";
import LogoCarousel from "../LogoCarousel";
import PromiseSection from "./PromiseSection";
import PortfolioSection from "../Portfolio/PortfolioSection";
import { portfolio_data, services } from "../data";
import "../css/services-aboutuspage.css";
import { ContentsSection, ServicesSubheader, WaveButton } from "../styled";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";

export default function MediaView({ scrollY }) {
  Aos.init();
  const [block_section, setBlockSection] = useState(
    services.find((s) => s.name === "Photography & Videos").blocks
  );
  return (
    <Row>
      <Helmet>
        <title>
          Professional Photography & Videography services | E-Max Interactive
        </title>
        <meta
          name="description"
          content="E-Max Interactive offers professional photography and videography services that help businesses stand out from the competition. Contact us today for more information!"
        />
      </Helmet>
      <div className="header services_header">
        <h1 className="pageTitle">Photography & Videos</h1>
        <HashLink to="#media-contents">
          <div className="arrowContainer">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </HashLink>
      </div>
      <ContentsSection id="media-contents">
        <div className="text">
          <ServicesSubheader>Services</ServicesSubheader>
          <h2>Bring Your Brand to Life</h2>
          <p className="paragraph">
            Photography and video have become the go-to for businesses in the
            service industry looking to market themselves. Professional
            photographs can make a lasting impression on customers, while video
            clips give an enhanced insight into what each service provider is
            offering. Images add life and color to products or services, and
            these visuals create excitement while also helping customers connect
            with the brand.
          </p>
          <p className="paragraph">
            With digital platforms like Instagram, Youtube, and TikTok providing
            access to millions of views each day, creative photography and video
            content is helping many service professionals rise to the top. At
            E-Max Interactive, we work closely with our clients to create
            meaningful visuals that help them stand out from the competition. We
            use cutting-edge technology to ensure that all of our photographs
            and videos adhere to the highest standards, giving your brand the
            edge it needs.
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
            src={require(`./images/photography-Videos-Left.png`)}
            alt="image1"
            data-aos="fadeInUp"
            data-aos-delay="1500"
            data-aos-duration="2500"
            data-aos-once="true"
            className="left_image clearEdge"
          />
          <img
            src={require(`./images/photography-Videos-Right.png`)}
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
