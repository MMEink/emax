import BlackBanner from "../BlackBanner";
import { Row, Button } from "react-bootstrap";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import ContactForm from "../ContactForm";
import LogoCarousel from "../LogoCarousel";
import PortfolioSection from "../Portfolio/PortfolioSection";
import { portfolio_data } from "../data";
import { promise } from "../data";
import "./services.css";
import {
  ContentsSection,
  ServicesSubheader,
  PromiseSection,
  WaveButton,
} from "../styled";

export default function EmailMarketingView() {
  return (
    <Row>
      <div className="header services_header">
        <h1 className="pageTitle">Email Marketing</h1>
        <div className="arrowContainer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ContentsSection>
        <div className="text">
          <ServicesSubheader>Services</ServicesSubheader>
          <h2>Drive Engagement</h2>
          <p className="paragraph">
            Engage with your consumers directly with custom email campaigns
            featuring strategic content that matters to them. Let the team at
            E-Max create an email marketing strategy that’s centered around the
            goals of your business.
          </p>
          <p className="paragraph">
            Email marketing can help you increase your brands awareness, drive
            engagement, nurture leads and make sales. Our marketing team
            recognizes these key benefits of email marketing and has a proven
            track record of countless successful email campaigns.
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
            src={require(`./images/email-marketing-right.png`)}
            alt="image2"
            width="100%"
            className="image2 fadeInUp loose2"
          />
          <img
            src={require(`./images/email-marketing-left.png`)}
            alt="image1"
            style={{ position: "absolute" }}
            className="image1 fadeInUp loose1"
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
