import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1DT from "../images/home-hero-1.jpg";
import slide1MB from "../images/home-hero-mb-1.jpg";
import slide2DT from "../images/home-hero-2.jpg";
import slide2MB from "../images/home-hero-mb-2.jpg";
import slide3DT from "../images/home-hero-3.jpeg";
import slide3MB from "../images/home-hero-mb-3.jpg";
//site css imports below
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Nav } from "react-bootstrap";

export default function SwiperSection() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={true}
      speed={4000}
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides
      style={{ marginTop: "1rem", width: "100%" }}
    >
      <Nav.Link href="#aboutUs">
        <div className="slogan">
          <h2>Expert Marketing For The Service Industry</h2>
          <div className="longdash"></div>
          <p className="subheader">Expand your business in exciting new ways</p>
        </div>
      </Nav.Link>
      <SwiperSlide key={1}>
        <picture>
          <source media="(min-width:600px)" srcSet={slide1DT} />
          <source media="(max-width:599px)" srcSet={slide1MB} />
          <img src={slide1DT} alt="slide1" className="slideImg" />
        </picture>
      </SwiperSlide>
      <SwiperSlide key={2}>
        <picture>
          <source media="(min-width:600px)" srcSet={slide2DT} />
          <source media="(max-width:599px)" srcSet={slide2MB} />
          <img src={slide2DT} alt="slide2" className="slideImg" />
        </picture>
      </SwiperSlide>
      <SwiperSlide key={3}>
        <picture>
          <source media="(min-width:600px)" srcSet={slide3DT} />
          <source media="(max-width:599px)" srcSet={slide3MB} />
          <img src={slide3DT} alt="slide3" className="slideImg" />
        </picture>
      </SwiperSlide>
    </Swiper>
  );
}
