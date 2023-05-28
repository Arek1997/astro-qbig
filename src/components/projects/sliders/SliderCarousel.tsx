import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { slides } from "./SliderWrapper";

import "swiper/css";
import "swiper/css/autoplay";

const SliderCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      {slides.map(({ image, altText, text }, i) => (
        <SwiperSlide
          style={{ height: "300px" }}
          className="rounded-wrapper relative"
          key={i}
        >
          <img
            src={image}
            alt={altText}
            className="h-full w-full object-cover"
          />
          <div className="rounded-wrapper absolute bottom-3 w-[90%] translate-x-[5%] bg-black/80 px-6 py-4 text-center">
            <p className="text-slate-100">{text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderCarousel;
