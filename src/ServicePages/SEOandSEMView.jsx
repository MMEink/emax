import BlackBanner from "../BlackBanner";
import { Row } from "react-bootstrap";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import ContactForm from "../ContactForm";
import LogoCarousel from "../LogoCarousel";
import PromiseSection from "./PromiseSection";
import { services } from "../data";
import "../css/services-aboutuspage.css";
import { ContentsSection, ServicesSubheader, WaveButton } from "../styled";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Aos from "aos";
import "aos/dist/aos.css";

export default function WebDesignAndSEOView({ scrollY }) {
  useEffect(() => {
    Aos.init();
  }, []);
  const block_section = services.find((s) => s.name === "SEO & SEM").blocks;
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>
            SEO & SEM Services for YourBusinesses | E-Max Interactive
          </title>
          <meta
            name="description"
            content="Let E-Max Interactive craft a comprehensive SEO & SEM strategy to optimize your online presence and reach potential customers."
          />
        </Helmet>
        <div className="header services_header seo_header">
          <div className="header-contents">
            <h1 className="pageTitle">SEO & SEM</h1>
            <HashLink to="#seo-contents">
              <div className="arrowContainer">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </HashLink>
          </div>
        </div>
        <ContentsSection id="seo-contents">
          <div className="text">
            <ServicesSubheader>Services</ServicesSubheader>
            <h2>Better Page Rankings</h2>
            <p className="paragraph">
              SEO (search engine optimization) and SEM (search engine marketing)
              work together to strategically drive customers to your website
              using both organic traffic and paid ad campaigns. With a thorough
              understanding of how customers use search engines, a well-crafted
              SEO & SEM plan can foster more leads, increase awareness and build
              trust in your company.
            </p>
            <p className="paragraph">
              You want people to find your website when they search for the
              services you offer, that is why SEO & SEM are invaluable tools.
              E-Max Interactive can help you create a comprehensive SEO & SEM
              strategy to optimize your online presence and reach potential
              customers. With our specialized experience in this area, we can
              make sure your website is featured prominently in search engine
              results.
            </p>
            <p className="paragraph">
              Our SEO services include keyword research, on-page optimization,
              link building, and content creation. We use the latest tools and
              techniques to ensure that your website is optimized for search
              engines and your target audience.
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
              src={require(`./images/SEO-Slide-up-Left.png`)}
              alt="image1"
              data-aos="fadeInUp"
              data-aos-delay="1500"
              data-aos-duration="2500"
              data-aos-once="true"
              className="left_image"
            />
            <img
              src={require(`./images/SEO-Slide-up-Right.png`)}
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
        <LogoCarousel />
        <BlackBanner />
        <ContactForm />
      </Row>
    </HelmetProvider>
  );
}
