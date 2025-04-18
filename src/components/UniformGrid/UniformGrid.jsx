import React, { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "aos/dist/aos.css"; // импорт стилей AOS
import AOS from "aos";
import "./UniformGrid.css";
import imageCompression from "browser-image-compression";

const UniformGrid = ({ images }) => {
  const [compressedImages, setCompressedImages] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });

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
            const compressedUrl = URL.createObjectURL(compressedFile);
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
      <div className="strict-grid">
        {compressedImages.map(({ id, compressedSrc, title, src }, index) => (
          <div
            key={id || compressedSrc}
            className="strict-item"
            data-aos="fade-up"
            data-aos-delay={index * 150} // увеличение задержки для каждого
          >
            {/* Используем оригинальное изображение для полноэкранного просмотра */}
            <PhotoView src={src}>
              <img
                srcSet={`${compressedSrc} 800w, ${src} 1200w`} // Адаптивное изображение
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 800px"
                src={compressedSrc}  // Сжатое изображение для миниатюры
                alt={title}
                loading="lazy"
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

export default UniformGrid;