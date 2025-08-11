import React, { useEffect } from 'react';
import './ServicesGrid.css';
import { ServiceCard } from './ServiceCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ServicesGrid ({ services }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // once: true — чтобы анимация была один раз
  }, []);

  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 150} // задержка между карточками
          className='service-card-container'
        >
          <ServiceCard {...service}  />
        </div>
      ))}
    </div>
  );
};