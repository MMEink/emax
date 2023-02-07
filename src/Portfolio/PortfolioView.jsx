import BlackBanner from "../BlackBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper";
import { Row, Card, Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm";
import { WorkCards, WorkCardsNav, ModalCloseBtn } from "../styled";
import { portfolio_data } from "../data";
import LogoCarousel from "../LogoCarousel";
import multiple from "./images/image-multiple-svgrepo-com.svg";
import expand from "./images/resize-svgrepo-com.svg";

function PortfolioView() {
  const category = [
    "Show All",
    "Icons",
    "Illustrations",
    "UI Elements",
    "Media",
    "Graphics",
  ];
  const [portfolioData, setPortfolioData] = useState(portfolio_data);
  const [hoverImg, setHoverImg] = useState("");
  const [selectedImg, setSelectedImg] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSelectedImg([]);
  };
  const handleShow = (work) => {
    setShow(true);
    setSelectedImg(work.image);
    console.log("lightbox open");
  };
  const OnfilterClick = (b) => {
    if (b !== "Show All") {
      setPortfolioData(
        portfolio_data.filter((data) => data.category.includes(b))
      );
    } else {
      setPortfolioData(portfolio_data);
    }
  };

  console.log(portfolioData);

  return (
    <Row>
      <div className="header portfolioPg">
        <h1 className="pageTitle">Portfolio</h1>
        <div className="arrowContainer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <WorkCardsNav>
        {category.map((b, i) => (
          <li key={i} onClick={() => OnfilterClick(b)}>
            {b}
          </li>
        ))}
      </WorkCardsNav>
      <WorkCards>
        {portfolioData.map((work, i) => (
          <Card
            key={i}
            style={{ justifyItems: "center", margin: "1rem 0", border: "none" }}
            onClick={() => handleShow(work)}
            onMouseEnter={() => setHoverImg(work.name)}
            onMouseLeave={() => setHoverImg("")}
          >
            <Card.Img
              variant="top"
              src={require(`${work.image[0]}`)}
              width="290px"
              height="200px"
            />
            {hoverImg == work.name && (
              <img
                style={{ position: "absolute", top: "25%", left: "40%" }}
                src={work.image.length > 1 ? multiple : expand}
                onClick={() => handleShow(work)}
              />
            )}
            <Card.Body>
              <Card.Title style={{ fontSize: "1.5rem" }}>
                {work.name}
              </Card.Title>
              <Card.Text>{work.category.join(" ")}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </WorkCards>
      <LogoCarousel />
      <BlackBanner />
      <ContactForm />
      <Modal show={show} onHide={handleClose}>
        <ModalCloseBtn onClick={handleClose}>X</ModalCloseBtn>
        {selectedImg && selectedImg.length > 1 && (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={window.innerWidth >= 900 ? true : false}
            pagination={window.innerWidth < 600 ? true : false}
            slidesPerView={1}
            spaceBetween={50}
            centeredSlides
            loop={true}
            style={{ justifyContent: "center" }}
            className="portfolio_swiper"
          >
            {selectedImg.map((s, i) => (
              <SwiperSlide key={i} style={{}}>
                <img src={require(`${s}`)} width="60%" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {selectedImg && selectedImg.length === 1 && (
          <img
            src={require(`${selectedImg[0]}`)}
            width="40%"
            style={{ alignSelf: "center" }}
            className="modal_singleImg"
          />
        )}

        <h5 style={{ color: "#fff", textAlign: "center" }}>Image</h5>
      </Modal>
    </Row>
  );
}

export default PortfolioView;
