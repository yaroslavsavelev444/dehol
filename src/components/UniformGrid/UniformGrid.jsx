import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "aos/dist/aos.css"; // импорт стилей AOS
import AOS from "aos";
import { useEffect } from "react";
import "./UniformGrid.css";

const UniformGrid = ({ images }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
    
  }, []);

  if (!images?.length) return null;

  return (
    <PhotoProvider>
      <div className="strict-grid">
        {images.map(({ id, src, title }, index) => (
          <PhotoView key={id || src || index} src={src}>
            <div
              className="strict-item"
              data-aos="fade-up"
              data-aos-delay={index * 150} // увеличение задержки для каждого
            >
              <img src={src} alt={title} loading="lazy" />
              <div className="overlay">
                <span>{title}</span>
              </div>
            </div>
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default UniformGrid;