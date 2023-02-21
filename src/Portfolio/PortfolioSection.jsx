import { Row, Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Pagination, Navigation } from "swiper";
import { ServicePagesPortfolio, ModalCloseBtn } from "../styled";
import arrow from "./images/1522547488.svg";
import { Link } from "react-router-dom";
import multiple from "./images/image-multiple-svgrepo-com.svg";
import video from "./images/video.svg";
import expand from "./images/resize-svgrepo-com.svg";

export default function PortfolioSection({ portfolio }) {
  const [hoverImg, setHoverImg] = useState("");
  const [selectedImg, setSelectedImg] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const handleClose = () => {
    setShow(false);
    setSelectedImg([]);
    setSelectedVideo("");
  };
  const handleShow = (work) => {
    setShow(true);
    work.image && setSelectedImg(work.image);
    work.video && setSelectedVideo(work.video_link);
  };
  return (
    <Row
      style={{
        margin: "2rem auto",
        backgroundColor: "white",
        letterSpacing: "2px",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontSize: "2rem",
          textTransform: "uppercase",
          color: "#444",
        }}
      >
        showCase
        <hr style={{ width: "15%", margin: "2rem auto" }} />
      </h3>
      <ServicePagesPortfolio>
        {portfolio.map((p, i) => (
          <div
            key={i}
            onClick={() =>
              window.innerWidth < 900 && !p.redirect_link && handleShow(p)
            }
            onMouseEnter={() => setHoverImg(p.name)}
            onMouseLeave={() => setHoverImg("")}
            className="portfolioCard"
          >
            <img
              src={require(`${p.thumbnail}`)}
              className="coverImg"
              alt={p.name}
            />
            {hoverImg === p.name && p.image && (
              <div
                style={{
                  position: "absolute",
                  cursor: "pointer",
                  bottom: "15%",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => handleShow(p)}
              >
                <img
                  src={p.image && p.image.length > 1 ? multiple : expand}
                  alt="icon"
                />
              </div>
            )}
            {hoverImg === p.name && p.video && (
              <div
                style={{
                  position: "absolute",
                  cursor: "pointer",
                  bottom: "15%",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => handleShow(p)}
              >
                <img src={video} alt={video} />
              </div>
            )}
            {window.innerWidth < 900 && p.redirect_link ? (
              <a
                rel="noreferrer"
                href={p.redirect_link}
                target={"_blank"}
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "25%",
                  fontWeight: "800",
                  padding: "3px",
                  border: "2px solid transparent",
                  textTransform: "uppercase",
                  textDecoration: "underline",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  color: "#444",
                  borderRadius: "5px",
                }}
              >
                Click to Open
              </a>
            ) : (
              hoverImg === p.name &&
              p.redirect_link && (
                <a
                  rel="noreferrer"
                  href={p.redirect_link}
                  target={"_blank"}
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "25%",
                    color: "#fff",
                    fontWeight: "800",
                    paddingBottom: "3px",
                    borderBottom: "2px solid #fff",
                    textTransform: "uppercase",
                  }}
                >
                  Click to Open
                </a>
              )
            )}
            {hoverImg === p.name ? (
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
        <ModalCloseBtn onClick={handleClose}>close</ModalCloseBtn>
        <ModalCloseBtn onClick={handleClose}>close</ModalCloseBtn>
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
                <img
                  src={require(`${s}`)}
                  width="60%"
                  loading="lazy"
                  alt="images"
                />
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
            loading="lazy"
            alt="images"
          />
        )}
        {selectedVideo && (
          <iframe
            title={selectedVideo}
            src={selectedVideo}
            allowFullScreen
            width={window.innerWidth > 800 ? "750px" : "400px"}
            height={window.innerWidth > 800 ? "600px" : "300px"}
            style={{ alignSelf: "center" }}
            loading="lazy"
          ></iframe>
        )}
      </Modal>
      <div className="seeMorebanner">
        <Link to={"/portfolio"}>
          See More <img src={arrow} alt="arrow" className="arrow" />
        </Link>
      </div>
    </Row>
  );
}
