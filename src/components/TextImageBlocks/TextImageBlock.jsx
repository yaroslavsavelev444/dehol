import React, { useEffect } from "react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./TextImageBlock.css";

export default function TextImageBlock({ reversed, title, subtitle, text, image }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50, // срабатывает чуть позже
    });

    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  return (
    <PhotoProvider>
      <div className="ti-wrapper" data-aos="fade-up">
        <div className={reversed ? "ti-container-reversed" : "ti-container"}>
          <div className="ti-text">
            <h2>{title || ""}</h2>
            <h4>{subtitle || ""}</h4>
            <p>{text || "Текст"}</p>
          </div>
          <div className="ti-image">
            <PhotoView src={image}>
              <img src={image} alt="cnc" loading="lazy" />
            </PhotoView>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
}