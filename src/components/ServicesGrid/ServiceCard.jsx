import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ServicesGrid.css';

export const ServiceCard = ({ title, description, items, note, buttonText = "УЗНАТЬ ПОДРОБНЕЕ", onClick }) => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="service-card" data-aos="fade-up">
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>

      <ul className="service-list">
        {items.map((item, index) => (
          <li key={index} className="service-item">
            <span className="service-dot" /> {item}
          </li>
        ))}
      </ul>


      <button className="service-button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};