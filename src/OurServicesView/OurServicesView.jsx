import BlackBanner from "../BlackBanner";
import { HashLink } from "react-router-hash-link";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm";
import { services } from "../data";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LogoCarousel from "../LogoCarousel";
import {
  ServiceContent,
  ServiceContentText,
  ServiceImgFrame,
  WaveButton,
} from "../styled";

function OurServicesView() {
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>
            Professional Marketing Services Angency | E-Max Interactive
          </title>
          <meta
            name="description"
            content="We offer a wide range of marketing services including web development, branding, email marketing, seo, photography and much more. Grow your service business with help from our marketing experts."
          />
        </Helmet>
        <div className="header servicesPg">
          <div className="header-contents">
            <h1 className="pageTitle">Our Services</h1>
            <HashLink to="#ourservices-contents">
              <div className="arrowContainer">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </HashLink>
          </div>
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
                  <img
                    src={require(`${service.sp_img}`)}
                    className="image-1"
                    alt={service.name}
                  />
                </div>
              </ServiceImgFrame>
            </ServiceContent>
          ))}
        </div>
        <LogoCarousel />
        <BlackBanner />
        <ContactForm />
      </Row>
    </HelmetProvider>
  );
}

export default OurServicesView;
