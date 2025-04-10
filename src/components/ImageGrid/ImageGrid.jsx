// components/ImageGrid.jsx
import React from "react";
import "./ImageGrid.css";

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map(({ src, title }, index) => (
        <div className="image-item" key={index}>
          <img src={src} alt={title} />
          <div className="overlay">
            <span>{title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;