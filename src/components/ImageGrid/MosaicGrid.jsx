// components/MosaicGrid.jsx
import React from "react";
import "./MosaicGrid.css";

const MosaicGrid = ({ images }) => {
  return (
    <div className="mosaic-grid">
      {images.map(({ src, title, className }, i) => (
        <div key={i} className={`mosaic-item ${className}`}>
          <img src={src} alt={title} />
          <div className="overlay">
            <span>{title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MosaicGrid;