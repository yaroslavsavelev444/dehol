import React, { useState, useEffect, useRef } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./TextImageBlock.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";

export default function TextImageBlock({
  reversed,
  title,
  subtitle,
  text,
  image,
  images,
  imageWidth,
  imageHeight,
}) {
  const [slides, setSlides] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });

    setTimeout(() => AOS.refresh(), 100);

    const finalImages = images || (image ? [image] : []);
    setSlides(finalImages);
  }, [image, images]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleClick = (e) => {
    // Предотвращаем открытие PhotoView при клике на навигацию
    if (e.target.closest('.swiper-button-next') || 
        e.target.closest('.swiper-button-prev')) {
      e.stopPropagation();
    }
  };

  return (
    <PhotoProvider>
      <div className="ti-wrapper" data-aos="fade-up">
        <div className={reversed ? "ti-container-reversed" : "ti-container"}>
          <div className="ti-text">
            <h2>{title || ""}</h2>
            <h4>{subtitle || ""}</h4>
            <p>{text || ""}</p>
          </div>

          <div className="ti-image">
            {slides.length === 1 ? (
              <PhotoView src={slides[0]}>
                <img
                  src={slides[0]}
                  alt="cnc"
                  loading="lazy"
                  style={{
                    width: imageWidth || "100%",
                    height: imageHeight || "auto",
                  }}
                />
              </PhotoView>
            ) : (
              <div className="swiper-container" onClick={handleClick}>
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: nextRef.current,
                    prevEl: prevRef.current,
                  }}
                  spaceBetween={10}
                  slidesPerView="auto"
                  centeredSlides={true}
                  className="custom-swiper"
                  onSlideChange={handleSlideChange}
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <PhotoView src={slide}>
                        <img 
                          src={slide} 
                          alt={`slide-${index}`} 
                          loading="lazy" 
                          className="swiper-slide-image"
                        />
                      </PhotoView>
                    </SwiperSlide>
                  ))}
                  
                  {/* Счетчик изображений */}
                  <div className="swiper-counter">
                    {activeIndex + 1} / {slides.length}
                  </div>
                  
                  {/* Навигационные кнопки */}
                  <div 
                    ref={nextRef} 
                    className="swiper-button-next"
                  />
                  <div 
                    ref={prevRef} 
                    className="swiper-button-prev" 
                  />
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
}