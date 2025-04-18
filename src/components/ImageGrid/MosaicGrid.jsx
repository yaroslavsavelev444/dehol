import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MosaicGrid.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import imageCompression from 'browser-image-compression';

const MosaicGrid = ({ images }) => {
  const [compressedImages, setCompressedImages] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });

    const compressImages = async () => {
      try {
        const compressed = await Promise.all(
          images.map(async (image) => {
            const options = {
              maxSizeMB: 0.5,           // Максимальный размер файла 0.5MB
              maxWidthOrHeight: 800,    // Максимальная ширина/высота
              useWebWorker: true,       // Асинхронная обработка
            };
            const compressedFile = await imageCompression(image.src, options);
            const compressedUrl = URL.createObjectURL(compressedFile); // Сжатый URL
            return { ...image, compressedSrc: compressedUrl };
          })
        );
        setCompressedImages(compressed);
      } catch (error) {
        console.error("Ошибка при сжатии изображений:", error);
        setCompressedImages(images); // Если ошибка, загружаем оригинальные
      }
    };

    if (images?.length) compressImages();
  }, [images]);

  if (!compressedImages?.length) return null;

  return (
    <PhotoProvider>
      <div className="mosaic-grid">
        {compressedImages.map(({ id, compressedSrc, title, className, src }, index) => (
          <div
            className={`mosaic-item ${className || ""}`}
            data-aos="fade-up"
            data-aos-delay={index * 100} // задержка в 100ms на каждый следующий
            key={id || compressedSrc}
          >
            {/* Фото для отображения */}
            <PhotoView src={src}>
              <img
                src={compressedSrc}  // Сжатое изображение для предварительного просмотра
                alt={title}
                loading="lazy"
                srcSet={`${compressedSrc} 800w, ${src} 1200w`}
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 800px"
              />
            </PhotoView>

            <div className="overlay">
              <span>{title}</span>
            </div>
          </div>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default MosaicGrid;