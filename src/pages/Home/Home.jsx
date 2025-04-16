import React, { lazy } from "react";
import "./Home.css";
import Slide1 from "../../components/Slides/Slide1";

const SliderComponent = lazy(() =>
  import("../../components/Slider/SliderComponent")
);
const About = lazy(() => import("../About/About"));
const Services = lazy(() => import("../Services/Services"));
const Production = lazy(() => import("../Production/Production"));
const Contacts = lazy(() => import("../Contacts/Contacts"));

export default function Home({sectionsRef}) {
  const slides = [<Slide1 />, <Slide1 />];
  return (
    <div>
      <SliderComponent slides={slides} />
      <section ref={sectionsRef.about}>
        <About />
      </section>
      <section ref={sectionsRef.services}>
        <Services />
      </section>
      <section ref={sectionsRef.production}>
        <Production />
      </section>
      <section ref={sectionsRef.contacts}>
        <Contacts />
      </section>
    </div>
  );
}
