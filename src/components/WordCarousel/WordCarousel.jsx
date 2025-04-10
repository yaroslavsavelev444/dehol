import React, { useEffect, useRef, useState } from 'react';
import './CitiesSlider.css';

const AUTOCHANGE_TIME = 5000;

export default function CitiesSlider({ slides = [] }) {
  const [activeSlide, setActiveSlide] = useState(-1);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);
  const changeTO = useRef(null);

  useEffect(() => {
    setActiveSlide(0);
    setSliderReady(true);
  
    changeTO.current = setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % slides.length;
        setPrevSlide(prev); // обновляем предыдущий только тут
        return next;
      });
    }, AUTOCHANGE_TIME);
  
    return () => clearInterval(changeTO.current);
  }, [slides.length]);

  return (
    <div className={`slider ${sliderReady ? 's--ready' : ''}`}>
      <p className="slider__top-heading">НАШИ ПРИНЦИПЫ</p>
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={`slider__slide ${index === activeSlide ? 's--active' : ''} ${index === prevSlide ? 's--prev' : ''}`}
            key={index}
          >
            <div className="slider__slide-content">
              <div className="slider__slide-subheading">{slide.city}</div>
              <div className="slider__slide-heading">
                {slide.country.split('').map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}