import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ImageGallery = ({ images }) => {
  return (
    <PhotoProvider>
      <div className="gallery">
        {images.map((image, index) => (
          <PhotoView key={index} src={image.src}>
            <img
              src={image.thumb || image.src} // Миниатюра или изображение по умолчанию
              alt={`Image ${index + 1}`}
              style={{
                cursor: 'pointer',
                margin: '10px',
                width: '150px', // Размеры миниатюр
                height: 'auto',
                borderRadius: '8px',
                transition: 'transform 0.2s ease-in-out',
              }}
              onClick={() => console.log(`Image ${index + 1} clicked`)} // Логирование кликов
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default ImageGallery;