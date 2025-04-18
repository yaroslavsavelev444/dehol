import React, { useState, useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imageCompression from 'browser-image-compression';

const ImageGallery = ({ images }) => {
  const [compressedImages, setCompressedImages] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });

    AOS.refresh(); // 🔥 добавь это

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
      <div className="gallery">
        {compressedImages.map((image, index) => (
          <PhotoView key={index} src={image.src}>
            <img
              // Адаптивные изображения
              srcSet={`${image.compressedSrc || image.src} 800w, ${image.src} 1200w`}
              sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 800px"
              src={image.compressedSrc || image.src}  // Сжатое изображение для миниатюры
              alt={`Image ${index + 1}`}
              data-aos="fade-up"
              data-aos-delay={index * 100} // последовательная задержка
              style={{
                cursor: 'pointer',
                margin: '10px',
                width: '150px',
                height: 'auto',
                borderRadius: '8px',
                transition: 'transform 0.2s ease-in-out',
              }}
              loading="lazy" // Ленивая загрузка
              onClick={() => console.log(`Image ${index + 1} clicked`)}
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default ImageGallery;