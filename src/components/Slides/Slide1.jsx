import React from "react";
import "./Slides.css";

export default function Slide1() {
  return (
    <div
      className="slide-content"
      style={{ backgroundImage: `url("/img/cnc-image.jpeg")` }}
    >
      {/* <div className="overlay">
        <h2>Добро пожаловать</h2>
        <Button onClick={() => alert("Нажали!")}>Подробнее</Button >
      </div> */}
    </div>
  );
}
