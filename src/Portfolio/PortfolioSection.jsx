import { Row, Card, Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Pagination, Navigation, Scrollbar } from "swiper";
import { ServicePagesPortfolio, ModalCloseBtn } from "../styled";
import arrow from "./images/1522547488.svg";
import { Link } from "react-router-dom";
import multiple from "./images/image-multiple-svgrepo-com.svg";
import expand from "./images/resize-svgrepo-com.svg";

export default function PortfolioSection({ portfolio }) {
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
  return (
    <Row style={{ margin: "2rem auto" }}>
      <h3 style={{ textAlign: "center", fontSize: "2rem" }}>
        Our Latest Work <hr style={{ width: "15%", margin: "2rem auto" }} />
      </h3>
      <ServicePagesPortfolio>
        {portfolio.map((p, i) => (
          <div
            key={i}
            onClick={() => handleShow(p)}
            onMouseEnter={() => setHoverImg(p.name)}
            onMouseLeave={() => setHoverImg("")}
            className="portfolioCard"
          >
            <img src={require(`${p.image[0]}`)} className="coverImg" />
            {hoverImg == p.name && (
              <img
                style={{ position: "absolute", top: "25%", left: "40%" }}
                src={p.image.length > 1 ? multiple : expand}
                onClick={() => handleShow(p)}
              />
            )}
            {hoverImg == p.name ? (
              <div className="infoBar hovered">
                <h4>{p.name}</h4>
              </div>
            ) : (
              <div className="infoBar">
                <h4>{p.name}</h4>
              </div>
            )}
          </div>
        ))}
      </ServicePagesPortfolio>
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
      <div className="seeMorebanner">
        <Link to={"/portfolio"}>
          See More <img src={arrow} alt="arrow" className="arrow" />
        </Link>
      </div>
    </Row>
  );
}
