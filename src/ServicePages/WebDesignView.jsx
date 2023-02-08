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

export default function WebDesignView() {
  return (
    <Row>
      <div className="header services_header">
        <h1 className="pageTitle">Web Development</h1>
        <div className="arrowContainer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ContentsSection>
        <div className="text">
          <ServicesSubheader>Services</ServicesSubheader>
          <h2>Beautiful Websites</h2>
          <p className="paragraph">
            Every website begins with a design, and we will tailor that site to
            your individual needs. Whether it is sleek and modern, or
            lightweight and fast. Our dedicated team of web developers and
            designers at E-max will create a user-friendly website for your
            business that not only exceeds your expectations but is also useful
            and informative for your customers.
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
            src={require(`./images/Web-New-Right.png`)}
            alt="image2"
            width="100%"
            className="image2 fadeInUp"
          />
          <img
            src={require(`./images/Web-New-Left.png`)}
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
