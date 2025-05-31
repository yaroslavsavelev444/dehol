import React from "react";
import "./Slides.css";

export default function Slide1({ image }) {
  return (
    <div
      className="slide-content"
      style={{ backgroundImage: `url(${image})` }}
    >
    </div>
  );
}
