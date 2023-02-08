import BlackBanner from "../BlackBanner";
import { Row, Button } from "react-bootstrap";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import ContactForm from "../ContactForm";
import LogoCarousel from "../LogoCarousel";
import PortfolioSection from "../Portfolio/PortfolioSection";
import { promise, portfolio_data } from "../data";
import "./services.css";
import {
  ContentsSection,
  ServicesSubheader,
  PromiseSection,
  WaveButton,
} from "../styled";

export default function BrandingView() {
  return (
    <Row>
      <div className="header services_header">
        <h1 className="pageTitle">Branding Services</h1>
        <div className="arrowContainer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ContentsSection>
        <div className="text">
          <ServicesSubheader>Services</ServicesSubheader>
          <h2>Tell Your Story</h2>
          <p className="paragraph">
            Your brand is more than a logo, it's who you are. Let us help you
            discover how to represent yourself to your customers.
          </p>
          <p className="paragraph">
            At E-Max Interactive we develop strategies to help develop your
            brand's identity and effectively communicate the core values of your
            brand. We want you to make meaningful, long lasting connections with
            customers.
          </p>
          <p className="paragraph">
            We are creative problem-solvers who can assist you in building a
            visual foundation to help tell your brand's story.
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
            src={require(`./images/Branding-Right.png`)}
            alt="image2"
            width="100%"
            className="image2 fadeInUp loose2"
          />
          <img
            src={require(`./images/Branding-Left.png`)}
            alt="image1"
            style={{ position: "absolute" }}
            className="image1 fadeInUp loose1"
          />
        </div>
      </ContentsSection>
      <PromiseSection>
        <div className="promiseContainer">
          {promise.map((p, i) => (
            <div key={i}>
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
