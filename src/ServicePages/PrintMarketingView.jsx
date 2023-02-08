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

export default function PrintMarketingView() {
  return (
    <Row>
      <div className="header services_header">
        <h1 className="pageTitle">Printing Marketing</h1>
        <div className="arrowContainer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ContentsSection>
        <div className="text">
          <ServicesSubheader>Services</ServicesSubheader>
          <h2>Get Noticed</h2>
          <p className="paragraph">
            We're not just digital. Bring your brand to life with brochures,
            magazine advertisements and a wide variety of printed media. From
            flyers and postcards to professionally printed catalogs and
            brochures. Our talented team of designers can produce any type of
            printed media for your business.
          </p>
          <p className="paragraph">
            Printed media helps increase awareness of your brand and engage
            current and potential customers. Printed materials and
            advertisements can help brands stand out and leave lasting
            impressions in a world where every business seems to be competing in
            the digital space.
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
            src={require(`./images/Print-Right.png`)}
            alt="image2"
            width="100%"
            className="image2 fadeInUp"
          />
          <img
            src={require(`./images/Print-Left.png`)}
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
