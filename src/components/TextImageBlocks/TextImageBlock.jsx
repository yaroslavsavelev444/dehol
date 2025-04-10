import React from "react";
import "./TextImageBlock.css";
export default function TextImageBlock({reversed , title , subtitle , text , image}) {
  return (
    <div className="ti-wrapper">
      <div className={reversed ? "ti-container-reversed" : "ti-container"} >
        <div className="ti-text">
            <h2>{title || ""}</h2>
            <h4>{subtitle || ""}</h4>
            <p>{text || "Текст"}</p>
        </div>
        <div className="ti-image">
            <img src={image} alt="cnc" />
        </div>
      </div>
    </div>
  );
}
