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

export default function WebDevelopmentView() {
  useEffect(() => {
    Aos.init();
  }, []);

  const block_section = services.find(
    (s) => s.name === "Web Development"
  ).blocks;
  return (
    <HelmetProvider>
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
        <div className="header services_header web_header">
          <div className="header-contents">
            <h1 className="pageTitle">Web Development</h1>
            <HashLink to="#webdev-contents">
              <div className="arrowContainer">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </HashLink>
          </div>
        </div>
        <ContentsSection id="webdev-contents">
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
                <div className="wave"></div>
              </WaveButton>
            </HashLink>
          </div>
          <div className="images">
            <img
              src={require(`./images/Web-New-Left.png`)}
              alt="image1"
              data-aos="fadeInUp"
              data-aos-delay="1500"
              data-aos-duration="2500"
              data-aos-once="true"
              className="left_image"
            />
            <img
              src={require(`./images/Web-New-Right.png`)}
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
            .filter((work) => work.category.includes("Web Development"))
            .slice(0, 8)}
        />
        <LogoCarousel />
        <BlackBanner />
        <ContactForm />
      </Row>
    </HelmetProvider>
  );
}
