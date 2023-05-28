import { useEffect, useState } from "react";
import { slides as data } from "./SliderWrapper";
import "./style/slider-expandable.css";

interface SlidesToRender {
  image: string;
  altText: string;
  text: string;
  active: boolean;
}

const SliderExpandable = () => {
  const [slides, setSlides] = useState<SlidesToRender[]>([]);

  const handlerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const selectedSlide = e.target as HTMLDivElement;
    const selectedSlideIndex = selectedSlide.getAttribute("data-slide-index")!;

    const updatedSlides = slides.map((slide, index) => {
      if (index === +selectedSlideIndex && slide.active) {
        slide.active = !slide.active;
      } else if (index === +selectedSlideIndex) {
        slide.active = true;
      } else {
        slide.active = false;
      }
      return slide;
    });

    setSlides(updatedSlides);
  };

  useEffect(() => {
    const slidesToRender = data.map((item, index) => {
      return {
        ...item,
        active: !index ? true : false,
      };
    });

    setSlides(slidesToRender);
  }, []);

  return (
    <div className="slider-expandable-wrapper rounded-wrapper flex w-full bg-black p-[2px]">
      {slides.map(({ image, text, active }, i) => (
        <div
          key={i}
          data-slide-index={i}
          onClick={handlerClick}
          className={`slider-expandable-item ${active ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="slider-expandable-item-text">
            <h3 className="-rotate-90 text-lg font-bold uppercase">{text}</h3>
            <p className="hidden text-3xl">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderExpandable;
