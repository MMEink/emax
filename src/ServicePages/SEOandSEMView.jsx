import BlackBanner from "../BlackBanner";
import { Row, Button } from "react-bootstrap";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import ContactForm from "../ContactForm";
import LogoCarousel from "../LogoCarousel";
import { promise } from "../data";
import "./services.css";
import {
  ContentsSection,
  ServicesSubheader,
  PromiseSection,
  WaveButton,
} from "../styled";

export default function SEOandSEMView() {
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
          <h2>Content Marketing.</h2>
          <p style={{ marginBottom: "2rem", width: "90%", fontWeight: 500 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia vitae
            mollitia dignissimos ab qui aspernatur.
          </p>
          <p style={{ marginBottom: "2rem", width: "90%", fontWeight: 500 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            laborum, molestiae eum odit illo pariatur. Sapiente deserunt optio
            dignissimos maiores pariatur, expedita voluptate quibusdam
            distinctio beatae.
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
      <LogoCarousel />
      <BlackBanner />
      <ContactForm />
    </Row>
  );
}
