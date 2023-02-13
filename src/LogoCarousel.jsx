import { Autoplay, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//site css imports below
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LogoCarousel() {
  const logoSlides = [
    {
      name: "48wall",
      img: "./images/logos/48-wall-events.V2-B&G-alpha.png",
      url: "https://www.48wallnyc.com/",
    },
    {
      name: "artistry",
      img: "./images/logos/logo-final-NEW-01.png",
      url: "https://www.eventsatartistry.com/",
    },
    {
      name: "MMEink",
      img: "./images/logos/MMEink-Logo_on blue.png",
      url: "https://www.mmeink.com/",
    },
    {
      name: "tardis",
      img: "./images/logos/Logo-final.png",
      url: "https://tardiscatering.com/",
    },
    {
      name: "mikeyEvents",
      img: "./images/logos/MikeymikeEventslogo.png",
      url: "https://mikeymikeevents.com/",
    },
    {
      name: "vpp",
      img: "./images/logos/vpp-logo.png",
      url: "https://www.virtualpartyplanner.com/",
    },
    {
      name: "441vintage",
      img: "./images/logos/441_Vintage_Logo-removebg-preview.png",
      url: "https://www.441vintage.com/",
    },
    {
      name: "infuso",
      img: "./images/logos/infuso.png",
      url: "https://www.infusopops.com/",
    },
    {
      name: "midtown-veranda",
      img: "./images/logos/Logo_Spread-Midtown-Veranda_logotext.png",
      url: "https://www.midtownveranda.com/",
    },
    {
      name: "emena",
      img: "./images/logos/emenalogo-message-2.png",
      url: "https://emenaspa.com/",
    },
  ];
  return (
    <Row className="logoCarousel">
      <h1 className="carouselTitle">
        Our Success Stories <hr style={{ marginTop: "1rem" }} />
      </h1>
      <Swiper
        className="swiper-container"
        modules={[Autoplay, Navigation, Scrollbar]}
        navigation={window.innerWidth >= 900 ? true : false}
        scrollbar={window.innerWidth < 900 ? true : false}
        autoplay={true}
        speed={3000}
        spaceBetween={50}
        centeredSlides
        loop={true}
        slidesPerView={window.innerWidth >= 1000 ? 5 : 2}
      >
        {logoSlides.map((slide, i) => (
          <SwiperSlide
            key={i}
            style={{ display: "flex", alignItems: "center" }}
          >
            <a href={slide.url} target={"_blank"} rel="noreferrer">
              <img
                src={require(`${slide.img}`)}
                alt={slide.name}
                className={"logoImg " + slide.name}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </Row>
  );
}
