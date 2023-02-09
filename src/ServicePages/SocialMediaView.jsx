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

export default function SocialMediaView() {
  const [block_section, setBlockSection] = useState(
    services.find((s) => s.name == "Social Media").blocks
  );
  return (
    <Row>
      <Helmet>
        <title>
          Social Media Strategies & Solutions for Service Providers | E-Max
          Interactive
        </title>
        <meta
          name="description"
          content="Grow your business with highly-effective social media strategies and solutions tailored to your business needs. Contact E-Max Interactive to learn more."
        />
      </Helmet>
      <div className="header services_header">
        <h1 className="pageTitle">Social Media Marketing</h1>
        <div className="arrowContainer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ContentsSection>
        <div className="text">
          <ServicesSubheader>Services</ServicesSubheader>
          <h2>Let's Get Social</h2>
          <p className="paragraph">
            Social media is an incredibly powerful tool for service-based
            businesses to easily reach their target audience. For starters,
            platforms like Facebook and Instagram allow service providers to
            easily display the quality of their work in an engaging manner that
            captures consumers' attention.
          </p>
          <p className="paragraph">
            With the right strategy and a bit of creativity, you can use social
            media to connect with new customers, amplify brand awareness,
            strengthen relationships with existing customers, and drive sales.
          </p>
          <p className="paragraph">
            It's important for businesses to remember that having an effective
            social media presence isn't about blindly just having a presence.
            It's about engaging with customers in meaningful ways that
            encourages trust and helps build authentic relationships. E-Max
            Interactive's social media specialists can help you create a
            successful social media strategy that speaks to your target audience
            and helps you maximize the potential of this powerful tool.
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
            src={require(`./images/Social-Media-Left.png`)}
            alt="image1"
            className="left_image fadeInUp"
          />
          <img
            src={require(`./images/Social-Media-Right.png`)}
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
