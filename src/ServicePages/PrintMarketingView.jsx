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

export default function PrintMarketingView({ scrollY }) {
  useEffect(() => {
    Aos.init();
  }, []);
  const block_section = services.find(
    (s) => s.name === "Print Marketing"
  ).blocks;
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Business Print Marketing Services | E-Max Interactive</title>
          <meta
            name="description"
            content="Get the best results from your print marketing efforts with help from E-Max Interactive. We create high-impact and professional print materials to attract and engage customers."
          />
        </Helmet>
        <div className="header services_header print_header">
          <div className="header-contents">
            <h1 className="pageTitle">Printing Marketing</h1>
            <HashLink to="#printMkt-contents">
              <div className="arrowContainer">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </HashLink>
          </div>
        </div>
        <ContentsSection id="printMkt-contents">
          <div className="text">
            <ServicesSubheader>Services</ServicesSubheader>
            <h2>Get Noticed</h2>
            <p className="paragraph">
              Print marketing provides a tangible experience to customers that
              can’t be achieved online. From promotional materials like flyers,
              brochures, and business cards to larger-scale displays like
              posters and banners, print is an effective way to reach customers
              while they’re on the go. It’s also a great way to make a big
              impression at trade shows or other events.
            </p>
            <p className="paragraph">
              Using precise and professional language within the print message
              adds credibility as well as creativity. With clever design
              elements and customized branding, your customers can gain insight
              into who you are as a business before they ever step foot in the
              door.
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
              data-aos="fadeInUp"
              data-aos-delay="1500"
              data-aos-duration="2500"
              data-aos-once="true"
              className="left_image"
            />
            <img
              src={require(`./images/Print-Right.png`)}
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
            .filter((work) => work.category.includes("Print Marketing"))
            .slice(0, 4)}
        />
        <LogoCarousel />
        <BlackBanner />
        <ContactForm />
      </Row>
    </HelmetProvider>
  );
}
