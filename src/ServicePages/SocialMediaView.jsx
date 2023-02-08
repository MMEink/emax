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

export default function SocialMediaView() {
  return (
    <Row>
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
            Over 80% of consumers reported that social media significantly
            impacts buying decisions. That's why we're focused on driving the
            evolution of social media marketing to an increasingly important
            audience.
          </p>
          <p className="paragraph">
            Our talented social media marketing team can create various types of
            social media content from engaging videos to eye-catching graphic
            designs. We will custom tailor a social media strategy for your
            brand that attracts and engages users and gets your content in front
            of viewers.
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
            src={require(`./images/Social-Media-Right.png`)}
            alt="image2"
            width="100%"
            className="image2 fadeInUp loose2"
          />
          <img
            src={require(`./images/Social-Media-Left.png`)}
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
