import BlackBanner from "../BlackBanner";
import { HashLink } from "react-router-hash-link";
import { Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm";
import { services } from "../data";
import placeholder from "../images/branding-placeholder.jpg";
import LogoCarousel from "../LogoCarousel";
import {
  ServiceContent,
  ServiceContentText,
  ServiceImgFrame,
  WaveButton,
} from "../styled";

function OurServicesView() {
  return (
    <Row>
      <div className="header servicesPg">
        <h1 className="pageTitle">Our Services</h1>
        <HashLink to="#ourservices-contents">
          <div className="arrowContainer">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </HashLink>
      </div>
      <div className="servicePg-contents" id="ourservices-contents">
        {services.map((service, i) => (
          <ServiceContent
            key={i}
            style={
              i % 2
                ? { flexDirection: "row" }
                : { flexDirection: "row-reverse" }
            }
          >
            <ServiceContentText>
              <h4>
                <div
                  className="longdash"
                  style={{ backgroundColor: "black" }}
                ></div>
                {service.subtitle}
              </h4>
              <h3>{service.title}</h3>
              {service.sp_describle.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <Link to={`/${service.link}`}>
                <WaveButton>
                  <span>{service.button}</span>
                  <div class="wave"></div>
                </WaveButton>
              </Link>
            </ServiceContentText>
            <ServiceImgFrame>
              <div className="figure">
                <img src={placeholder} className="image-1" />
              </div>
            </ServiceImgFrame>
          </ServiceContent>
        ))}
      </div>
      <LogoCarousel />
      <BlackBanner />
      <ContactForm />
    </Row>
  );
}

export default OurServicesView;
