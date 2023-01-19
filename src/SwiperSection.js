import { Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1DT from "./images/48wall-slider-bw.jpg";
import slide1MB from "./images/48wall-slider-bw-mb.jpg";
import slide2DT from "./images/48wall-slider-bw2.jpg";
import slide2MB from "./images/48wall-slider-bw2-mb.jpg";
import slide3DT from "./images/48wall-slider-bw6.jpg";
import slide3MB from "./images/48wall-slider-bw6-mb.jpg";
//site css imports below
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export default function SwiperSection() {
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      effect="fade"
      pagination={{ clickable: false }}
      autoplay={true}
      speed={4000}
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides
    >
      <a href="#aboutUs">
        <div className="slogan">
          <h2>Expert Marketing For The Service Industry</h2>
          <div className="longdash"></div>
          <p className="subheader">Expand your business in exciting new ways</p>
        </div>
      </a>
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
