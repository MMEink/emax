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

export default function MediaView() {
  return (
    <Row>
      <div className="header services_header">
        <h1 className="pageTitle">Photography & Videos</h1>
        <div className="arrowContainer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ContentsSection>
        <div className="text">
          <ServicesSubheader>Services</ServicesSubheader>
          <h2>Bring Your Brand to Life</h2>
          <p className="paragraph">
            Visual content that represents your brand's aesthetic is paramount
            in engaging potential clients. Let our team of visual experts ensure
            your media captures your brand identity and excites your audience.
          </p>
          <p className="paragraph">
            Our video production division is equipped with state of the art
            video cameras and audio recording equipment at our in-house studio.
            We take advantage of top-of-the-line computers and industry standard
            programs when editing and producing video content. Our technicians
            and content directors have years of experience in various forms of
            media production.
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
            src={require(`./images/photography-Videos-Right.png`)}
            alt="image2"
            width="100%"
            className="image2 fadeInUp clearEdge2"
          />
          <img
            src={require(`./images/photography-Videos-Left.png`)}
            alt="image1"
            style={{ position: "absolute" }}
            className="image1 fadeInUp clearEdge1"
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
