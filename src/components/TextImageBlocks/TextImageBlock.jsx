import React, { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./TextImageBlock.css";
import imageCompression from 'browser-image-compression';

export default function TextImageBlock({
  reversed,
  title,
  subtitle,
  text,
  image,
  imageWidth,
  imageHeight
}) {
  const [compressedImage, setCompressedImage] = useState(image);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 100);

    const compressImage = async () => {
      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 800,
          useWebWorker: true,
        };

        const compressedFile = await imageCompression(image, options);
        const compressedUrl = URL.createObjectURL(compressedFile);
        setCompressedImage(compressedUrl);
      } catch (error) {
        console.error("Ошибка при сжатии изображения:", error);
      }
    };

    compressImage();
  }, [image]);

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
            <PhotoView src={compressedImage}>
              <img
                src={compressedImage}
                alt="cnc"
                loading="lazy"
                style={{
                  width: imageWidth || '100%',
                  height: imageHeight || 'auto',
                }}
              />
            </PhotoView>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
}