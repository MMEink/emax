import BlackBanner from "../BlackBanner";

import { Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm";
import { services } from "../data";
import placeholder from "../images/branding-placeholder.jpg";
import placeholder1 from "../images/webDesign-placeholder.jpg";
import LogoCarousel from "../LogoCarousel";

import "./OurServicesView.css";
import {
  ServiceContent,
  ServiceContentText,
  ServiceImgFrame,
  WaveButton,
} from "../styled";

function OurServicesView() {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  return (
    <Row>
      <div className="header servicesPg">
        <h1 className="pageTitle">Our Services</h1>
        <div className="arrowContainer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="servicePg-contents">
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
              <h3>{service.name}</h3>
              <p>{service.describe}</p>
              <WaveButton>
                <span>{service.button}</span>
                <div class="wave"></div>
              </WaveButton>
            </ServiceContentText>
            <ServiceImgFrame>
              <div className="figure">
                <div
                  className="image-1"
                  style={
                    scrollY >= 500 * (i + 1)
                      ? {
                          animation: "slicing 1.2s ease 0.5s 1 alternate",
                          backgroundColor: "#818a91",
                        }
                      : {}
                  }
                >
                  <div
                    className="image-2"
                    style={
                      scrollY >= 500 * (i + 1)
                        ? {
                            animation: "slicing 1s ease 0.5s 1 alternate",
                            backgroundImage: `url(${placeholder})`,
                          }
                        : {
                            opacity: "1",
                            backgroundImage: `url(${placeholder})`,
                          }
                    }
                  ></div>
                </div>
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
