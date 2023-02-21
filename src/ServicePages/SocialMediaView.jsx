import BlackBanner from "../BlackBanner";
import { Row } from "react-bootstrap";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import ContactForm from "../ContactForm";
import LogoCarousel from "../LogoCarousel";
import PromiseSection from "./PromiseSection";
import PortfolioSection from "../Portfolio/PortfolioSection";
import { portfolio_data, services } from "../data";
import "../css/services-aboutuspage.css";
import { ContentsSection, ServicesSubheader, WaveButton } from "../styled";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Aos from "aos";
import "aos/dist/aos.css";

export default function SocialMediaView({ scrollY }) {
  useEffect(() => {
    Aos.init();
  }, []);
  const block_section = services.find((s) => s.name === "Social Media").blocks;
  return (
    <HelmetProvider>
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
        <div className="header services_header social_header">
          <div className="header-contents">
            <h1 className="pageTitle">Social Media Marketing</h1>
            <HashLink to="#socialmedia-contents">
              <div className="arrowContainer">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </HashLink>
          </div>
        </div>
        <ContentsSection id="socialmedia-contents">
          <div className="text">
            <ServicesSubheader>Services</ServicesSubheader>
            <h2>Let's Get Social</h2>
            <p className="paragraph">
              Social media is an incredibly powerful tool for service-based
              businesses to easily reach their target audience. For starters,
              platforms like Facebook and Instagram allow service providers to
              easily display the quality of their work in an engaging manner
              that captures consumers' attention.
            </p>
            <p className="paragraph">
              With the right strategy and a bit of creativity, you can use
              social media to connect with new customers, amplify brand
              awareness, strengthen relationships with existing customers, and
              drive sales.
            </p>
            <p className="paragraph">
              It's important for businesses to remember that having an effective
              social media presence isn't about blindly just having a presence.
              It's about engaging with customers in meaningful ways that
              encourages trust and helps build authentic relationships. E-Max
              Interactive's social media specialists can help you create a
              successful social media strategy that speaks to your target
              audience and helps you maximize the potential of this powerful
              tool.
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
              data-aos="fadeInUp"
              data-aos-delay="1500"
              data-aos-duration="2500"
              data-aos-once="true"
              className="left_image"
            />
            <img
              src={require(`./images/Social-Media-Right.png`)}
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
        <PortfolioSection
          portfolio={portfolio_data
            .filter((work) => work.category.includes("Social Media"))
            .slice(0, 8)}
        />
        <LogoCarousel />
        <BlackBanner />
        <ContactForm />
      </Row>
    </HelmetProvider>
  );
}
