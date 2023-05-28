import { useEffect, useState } from "react";
import SliderCarousel from "./SliderCarousel";
import SliderExpandable from "./SliderExpandable";

export const slides = [
  {
    image: "/images/projects/slider/slide1.jpg",
    altText: "Nieszczelne połączenie",
    text: "Testery szczelności",
  },
  {
    image: "/images/projects/slider/slide2.jpg",
    altText: "Obrazek z trybikami obrazujący system optymalizacji",
    text: "Lean Manufacturing",
  },
  {
    image: "/images/projects/slider/slide3.jpg",
    altText: "Ekran laptopa z napisem authentication failed",
    text: "POKA-YOKE",
  },
  {
    image: "/images/projects/slider/slide4.jpg",
    altText:
      "Urządzenie pomiarowe z potencjometrami amalogowymi wskazujące poziom mocy",
    text: "Urządzenia pomiarowe",
  },
  {
    image: "/images/projects/slider/slide5.jpg",
    altText: "Ręczne urządzenia testujące, mierniki",
    text: "Testery produkcyjne",
  },
  {
    image: "/images/projects/slider/slide6.jpg",
    altText: "Stanowisko targowe",
    text: "Stanowisko targowe",
  },
];

const getMatches = () => matchMedia("(min-width: 1200px)").matches;

const SliderWrapper = () => {
  const [matches, setMatches] = useState(getMatches());
  const handleChange = () => setMatches(getMatches());

  useEffect(() => {
    window.addEventListener("resize", handleChange);
    return () => window.removeEventListener("resize", handleChange);
  }, []);

  return (
    <div className="projects-slider my-24">
      {matches ? <SliderExpandable /> : <SliderCarousel />}
    </div>
  );
};

export default SliderWrapper;
