import React from "react";
import SliderComponent from "../../components/Slider/SliderComponent";
import "./Home.css";
import Slide1 from "../../components/Slides/Slide1";

export default function Home() {

  const slides = [<Slide1 />, <Slide1 />];


             
  return (
    <div>
      <SliderComponent slides={slides} />
      <div className="text-wrapper">
        <div className="text-container">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem,
          neque minima atque quod temporibus. Odio nihil error cum sunt aperiam
          cupiditate sed saepe modi iste ad quo quod vitae temporibus fugit in
          placeat, iure assumenda amet maiores delectus! Incidunt officiis modi
          alias facere accusamus saepe cum voluptatem sint excepturi.
        </p>
        </div>
      </div>
    </div>
  );
}
