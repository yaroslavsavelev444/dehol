import React, { useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImageGallery = ({ images }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  
    AOS.refresh(); // 🔥 добавь это
  }, []);

  return (
    <PhotoProvider>
      <div className="gallery">
        {images.map((image, index) => (
          <PhotoView key={index} src={image.src}>
            <img
              src={image.thumb || image.src}
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
              onClick={() => console.log(`Image ${index + 1} clicked`)}
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default ImageGallery;