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

export default function WebDesignAndSEOView({ scrollY }) {
  const [block_section, setBlockSection] = useState(
    services.find((s) => s.name === "SEO & SEM").blocks
  );
  return (
    <Row>
      <Helmet>
        <title>SEO & SEM Services for YourBusinesses | E-Max Interactive</title>
        <meta
          name="description"
          content="Let E-Max Interactive craft a comprehensive SEO & SEM strategy to optimize your online presence and reach potential customers."
        />
      </Helmet>
      <div className="header services_header">
        <h1 className="pageTitle">SEO & SEM</h1>
        <HashLink to="#seo-contents">
          <div className="arrowContainer">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </HashLink>
      </div>
      <ContentsSection id="seo-contents">
        <div className="text">
          <ServicesSubheader>Services</ServicesSubheader>
          <h2>Better Page Rankings</h2>
          <p className="paragraph">
            SEO (search engine optimization) and SEM (search engine marketing)
            work together to strategically drive customers to your website using
            both organic traffic and paid ad campaigns. With a thorough
            understanding of how customers use search engines, a well-crafted
            SEO & SEM plan can foster more leads, increase awareness and build
            trust in your company.
          </p>
          <p className="paragraph">
            You want people to find your website when they search for the
            services you offer, that is why SEO & SEM are invaluable tools.
            E-Max Interactive can help you create a comprehensive SEO & SEM
            strategy to optimize your online presence and reach potential
            customers. With our specialized experience in this area, we can make
            sure your website is featured prominently in search engine results.
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
            className={scrollY > 350 ? "left_image fadeInUp" : "opacityToggle"}
          />
          <img
            src={require(`./images/SEO-Slide-up-Right.png`)}
            alt="image2"
            className={scrollY > 350 ? "right_image fadeInUp" : "opacityToggle"}
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
