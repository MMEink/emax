import BlackBanner from "../BlackBanner";
import { Row, Button } from "react-bootstrap";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import ContactForm from "../ContactForm";
import LogoCarousel from "../LogoCarousel";
import { promise } from "../data";
import PortfolioSection from "../Portfolio/PortfolioSection";
import { portfolio_data } from "../data";
import "./services.css";
import {
  ContentsSection,
  ServicesSubheader,
  PromiseSection,
  WaveButton,
} from "../styled";

export default function WebDesignAndSEOView() {
  return (
    <Row>
      <div className="header services_header">
        <h1 className="pageTitle">SEO & SEM</h1>
        <div className="arrowContainer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ContentsSection>
        <div className="text">
          <ServicesSubheader>Services</ServicesSubheader>
          <h2>Better Page Rankings</h2>
          <p className="paragraph">
            We recognize how important it is for your website to be found when
            potential customers are using search engines. So we will optimize
            your website using the latest SEO best practices to ensure your
            website is discovered under relevant search terms. Once your website
            is launched we will continually fine tune our approach to getting
            you the best search engine placement.
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
            src={require(`./images/main-fbrowser.png`)}
            alt="image2"
            width="100%"
            className="image2 fadeInUp"
          />
          <img
            src={require(`./images/main-fmobile.png`)}
            alt="image1"
            style={{ position: "absolute" }}
            className="image1 fadeInUp"
          />
        </div>
      </ContentsSection>
      <PromiseSection>
        <div className="promiseContainer">
          {promise.map((p, i) => (
            <div>
              <img src={require(`${p.icon}`)} />
              <p>{p.subheader}</p>
              <h3>{p.header}</h3>
              <p style={{ lineHeight: "1.8rem" }}>{p.describe}</p>
            </div>
          ))}
        </div>
      </PromiseSection>
      <PortfolioSection portfolio={portfolio_data.slice(0, 8)} />
      <LogoCarousel />
      <BlackBanner />
      <ContactForm />
    </Row>
  );
}
