import BlackBanner from "../BlackBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Row, Card, Modal, Pagination as Page } from "react-bootstrap";
import { useState } from "react";
import ContactForm from "../ContactForm";
import { WorkCards, WorkCardsNav, ModalCloseBtn } from "../styled";
import { portfolio_data } from "../data";
import LogoCarousel from "../LogoCarousel";
import multiple from "./images/image-multiple-svgrepo-com.svg";
import expand from "./images/resize-svgrepo-com.svg";
import video from "./images/video.svg";
import { HashLink } from "react-router-hash-link";
import { Helmet, HelmetProvider } from "react-helmet-async";

function PortfolioView() {
  const category = [
    "Our Latest Works",
    "Branding",
    "Print Marketing",
    "Web Development",
    "Media",
    "Email Marketing",
    "Social Media",
  ];
  const latestWork = portfolio_data.filter((data) => data.latest);
  const [portfolioData, setPortfolioData] = useState(latestWork);
  const [hoverImg, setHoverImg] = useState("");
  const [selectedImg, setSelectedImg] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [type, setType] = useState(category[0]);
  const [show, setShow] = useState(false);
  let temp = 1;
  const [active, setActive] = useState(temp);
  let items = [];
  let listLength =
    portfolioData.length / 8 >= 1
      ? portfolioData.length % 8 === 0
        ? portfolioData.length / 8
        : Math.trunc(portfolioData.length / 8) + 1
      : 1;

  for (let number = 1; number <= listLength; number++) {
    items.push(
      <Page.Item
        key={number}
        active={number === active}
        onClick={() => {
          if (window.innerWidth < 600) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          setActive(number);
        }}
      >
        {number}
      </Page.Item>
    );
  }

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
  const OnfilterClick = (b) => {
    setActive(temp);
    if (b !== "Our Latest Works") {
      setPortfolioData(
        portfolio_data.filter((data) => data.category.includes(b))
      );
    } else {
      setPortfolioData(latestWork);
    }
    setType(b);
  };

  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Marketing Portfolio| E-Max Interactive</title>
          <meta
            name="description"
            content="Take a look at our marketing portfolio featuring  web development, branding, email marketing, social media marketing, and photography and video."
          />
        </Helmet>
        <div className="header portfolioPg">
          <div className="header-contents">
            <h1 className="pageTitle">Portfolio</h1>
            <HashLink to="#porfoliopage-contents">
              <div className="arrowContainer">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </HashLink>
          </div>
        </div>

        <div id="porfoliopage-contents">
          <WorkCardsNav>
            {category.map((b, i) => (
              <li
                key={i}
                onClick={() => OnfilterClick(b)}
                tabIndex={i}
                className={type === b ? "btnfocus" : "noeffect"}
              >
                {b}
              </li>
            ))}
          </WorkCardsNav>
          <WorkCards>
            {portfolioData
              .slice((active - 1) * 8, active * 8)
              ?.map((work, i) => (
                <Card
                  key={i}
                  style={{
                    justifyItems: "center",
                    margin: "1rem 0",
                    border: "none",
                  }}
                  onClick={() =>
                    window.innerWidth < 900 &&
                    !work.redirect_link &&
                    handleShow(work)
                  }
                  onMouseEnter={() => setHoverImg(work.name)}
                  onMouseLeave={() => setHoverImg("")}
                >
                  <Card.Img variant="top" src={require(`${work.thumbnail}`)} />
                  {hoverImg === work.name && work.image && (
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
                      onClick={() => handleShow(work)}
                    >
                      <img
                        src={
                          work.image && work.image.length > 1
                            ? multiple
                            : expand
                        }
                        alt={work.name}
                      />
                    </div>
                  )}
                  {hoverImg === work.name && work.video && (
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
                      onClick={() => handleShow(work)}
                    >
                      <img src={video} alt={work.name} />
                    </div>
                  )}
                  {window.innerWidth < 900 && work.redirect_link ? (
                    <a
                      rel="noreferrer"
                      href={work.redirect_link}
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
                    hoverImg === work.name &&
                    work.redirect_link && (
                      <a
                        rel="noreferrer"
                        href={work.redirect_link}
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
                  <Card.Body>
                    <Card.Title style={{ fontSize: "1.5rem" }}>
                      {work.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              ))}
          </WorkCards>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>
              Showing{" "}
              {portfolioData.length >= 8
                ? 8 * active <= portfolioData.length
                  ? 8 * active
                  : portfolioData.length
                : portfolioData.length}{" "}
              of {portfolioData.length}
            </p>
            {portfolioData.length > 8 && <Page>{items}</Page>}
          </div>
        </div>
        <LogoCarousel />
        <BlackBanner />
        <ContactForm />
        <Modal show={show} onHide={handleClose}>
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
              height={window.innerWidth > 800 ? "700px" : "300px"}
              style={{ alignSelf: "center" }}
              loading="lazy"
            ></iframe>
          )}
        </Modal>
      </Row>
    </HelmetProvider>
  );
}

export default PortfolioView;
