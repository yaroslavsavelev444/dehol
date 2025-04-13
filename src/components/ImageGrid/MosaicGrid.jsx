// components/MosaicGrid.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MosaicGrid.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const MosaicGrid = ({ images }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  if (!images?.length) return null;

  return (
    <PhotoProvider>
      <div className="mosaic-grid">
        {images.map(({ id, src, title, className }, index) => (
          <PhotoView key={id || src} src={src}>
            <div
              className={`mosaic-item ${className || ""}`}
              data-aos="fade-up"
              data-aos-delay={index * 100} // задержка в 100ms на каждый следующий
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

export default MosaicGrid;