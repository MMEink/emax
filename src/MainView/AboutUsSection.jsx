import { Row, Col, Card } from "react-bootstrap";
import { services } from "../data";
import { Link } from "react-router-dom";

export default function AboutUsSection() {
  
  return (
    <Row className="aboutusSection">
      <div className="aboutUs" id="aboutUs">
        <div className="lfSection">
          <span className="smallText">
            KNOW US BETTER
            <hr />
          </span>
          <h3>We help create strategies to market and grow your business.</h3>
        </div>
        <div className="rtSection">
          <p>
            With over 25 years of marketing experience for the service industry
            we have the knowledge and skills to bring your brand to life. Our
            team of experts can help you elevate your business.
          </p>
        </div>
      </div>
      <Row className="services">
        {services.map((service) => (
          <Col md={4} sm={5} key={service.name}>
            <Link to={`/${service.link}`}>
            <Card className="service">
              <Card.Img
                variant="top"
                src={require(`${service.img}`)}
                className="serviceImg"
              ></Card.Img>
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.describe}</Card.Text>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Row>
  );
}
