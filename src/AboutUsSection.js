import { Row, Col, Card } from "react-bootstrap";

export default function AboutUsSection() {
  const services = [
    {
      link: "branding",
      name: "Branding",
      describe:
        "Your Brand is more than a logo, it’s who you are. Let us help you discover how to represent yourself to your consumer.",
      img: "./images/Branding.svg",
    },
    {
      link: "webDesign",
      name: "Web Design",
      describe:
        "Every website begins with a design, and we will tailor that site to your individual needs. Whether it is sleek and modern, or lightweight and fast.",
      img: "./images/Web-Design.svg",
    },
    {
      link: "SEOandSEM",
      name: "SEO & SEM",
      describe:
        "Search engine optimization and marketing will dramatically increase your business’s online presence. Our strategies will help your business reach its goals.",
      img: "./images/SEO-SEM.svg",
    },
    {
      link: "media",
      name: "Photography & Videos",
      describe:
        "Visual content that represents your brands aesthetic is paramount in representing yourself. Let our team of visual experts ensure your media captures your brand.",
      img: "./images/Photography-Videos.svg",
    },
    {
      link: "email-marketing",
      name: "Email Marketing",
      describe:
        "Engage with your consumers directly with your own custom email campaign with strategic content that matters to them.",
      img: "./images/Email-Marketing.svg",
    },
    {
      link: "print-marketing",
      name: "Print Marketing",
      describe:
        "We aren’t just digital, bring your brand to life with brochures and printed media.",
      img: "./images/Print-Marketing.svg",
    },
  ];
  return (
    <Row className="aboutusSection">
      <div className="aboutUs" id="aboutUs">
        <div className="lfSection">
          <span className="smallText">
            KNOW US BETTER
            <hr />
          </span>
          <h3>We help to create strategies, design & development.</h3>
        </div>
        <div className="rtSection">
          <p>
            With over 25 years in the industry we are committed to bringing your
            brand to life. Our team of experts can help you elevate your
            business.
          </p>
        </div>
      </div>
      <Row className="services">
        {services.map((service) => (
          <Col md={4} sm={5} key={service.name}>
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
          </Col>
        ))}
      </Row>
    </Row>
  );
}
