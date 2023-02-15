import BlackBanner from "../BlackBanner";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import ContactForm from "../ContactForm";
import LogoCarousel from "../LogoCarousel";
import PortfolioSection from "../Portfolio/PortfolioSection";
import PromiseSection from "./PromiseSection";
import { portfolio_data, services } from "../data";
import "../css/services-aboutuspage.css";
import { ContentsSection, ServicesSubheader, WaveButton } from "../styled";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";

export default function EmailMarketingView() {
  Aos.init();
  const [block_section, setBlockSection] = useState(
    services.find((s) => s.name === "Email Marketing").blocks
  );
  return (
    <Row>
      <Helmet>
        <title>Top Email Marketing Services | E-Max Interactive</title>
        <meta
          name="description"
          content="Get the best results from your email campaigns with professional help from E-Max Interactive. Contact us for the top email marketing services for your business."
        />
      </Helmet>
      <div className="header services_header">
        <h1 className="pageTitle">Email Marketing</h1>
        <HashLink to="#emailMkt-contents">
          <div className="arrowContainer">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </HashLink>
      </div>
      <ContentsSection id="emailMkt-contents">
        <div className="text">
          <ServicesSubheader>Services</ServicesSubheader>
          <h2>Drive Engagement</h2>
          <p className="paragraph">
            Email marketing continues to be a great way for businesses to reach
            their target audience directly. Through well-planned email
            campaigns, it’s possible to increase customer retention with
            informative newsletters or product updates, or create urgent
            customer demand with exciting giveaways or promotions that feel like
            big rewards.
          </p>
          <p className="paragraph">
            Emails can also be used to drive traffic back to the business
            website or social media platforms while also providing subscribers
            with easy access to customer service and help. With the ability to
            precisely target the most relevant audiences and measure results in
            real time, this strategy helps you measure success and create
            further engagement with customers.
          </p>
          <p className="paragraph">
            This helps you build stronger relationships in your industry, and
            ultimately increases the likelihood of higher ROI over time. At
            E-Max Interactive, our team of email marketing experts can help you
            create powerful and effective campaigns that will work for your
            business.
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
            src={require(`./images/email-marketing-left.png`)}
            alt="image1"
            data-aos="fadeInUp"
            data-aos-delay="1500"
            data-aos-duration="2500"
            data-aos-once="true"
            className="left_image"
          />
          <img
            src={require(`./images/email-marketing-right.png`)}
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
