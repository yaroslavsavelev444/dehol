// components/Slider/SliderComponent.jsx
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "./SliderComponent.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typewriter from "typewriter-effect/dist/core";


const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 10000,
  arrows: false,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const SliderComponent = ({ slides }) => {

  const typewriterRef = useRef(null);
  useEffect(() => {
       if (typewriterRef.current) {
         new Typewriter(typewriterRef.current, {
           strings: ["НПО Конструктор", "Изготовление деталей на ЧПУ"],
           autoStart: true,
           loop: true,
         });
       }
     }, []);

  return (
    <div className="slider-container"> 
    <h2 ref={typewriterRef} className="hero-title"/>
      <Slider {...sliderSettings}>
        {slides.map((SlideComponent, index) => (
          <div key={index} className="slide">
            {SlideComponent}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;