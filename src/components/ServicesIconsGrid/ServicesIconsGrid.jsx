import React, { useState, useEffect } from 'react';
import './ServicesIconsGrid.css';

const services = [
  {
    icon: '/img/services-icons/1cnc.png',
    text: 'МЕТАЛЛООБРАБОТКА',
    description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora error enim dolorum numquam! Aspernatur dolor quidem magnam molestiae deleniti.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora error enim dolorum numquam! Aspernatur dolor quidem magnam molestiae deleniti.',
    links: [{ label: 'Подробнее', href: '/services/1' }]
  },
  {
    icon: '/img/services-icons/2cnc.png',
    text: 'ТОКАРНАЯ\nОБРАБОТКА',
    description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora error enim dolorum numquam! Aspernatur dolor quidem magnam molestiae deleniti.',
    links: [{ label: 'Перейти', href: '/services/2' }]
  },
  {
    icon: '/img/services-icons/3cnc.png',
    text: 'ФРЕЗЕРНАЯ\nОБРАБОТКА',
    description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora error enim dolorum numquam! Aspernatur dolor quidem magnam molestiae deleniti.',
    image: '/public/img/works/IMG_1668.jpeg',
    links: [{ label: 'Подробнее', href: '/services/3' }]
  },
  {
    icon: '/img/services-icons/4cnc.png',
    text: 'ШЛИФОВКА',
    description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora error enim dolorum numquam! Aspernatur dolor quidem magnam molestiae deleniti.',
    links: [{ label: 'Подробнее', href: '/services/4' }]
  }
];

export default function ServicesIconsGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const items = document.querySelectorAll('.service-icon-item');
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 150);
    });
  }, []);
  useEffect(() => {
  const fadeItems = document.querySelectorAll('.fade-item');

  fadeItems.forEach((item, i) => {
    item.classList.remove('visible');
    setTimeout(() => {
      item.classList.add('visible');
    }, 200 * (i + 1)); // поочередная задержка
  });
}, [activeIndex]);

  return (
    <div className="services-container-wrapper">

    <div className="services-container">
      <div className="icons-column">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-icon-item ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="icon-wrapper">
              <img src={service.icon} alt="" className="icon-img" />
            </div>
            <div className="text">
              {service.text.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="details-panel" key={activeIndex}>
      {!!services[activeIndex].image && (
  <div className="details-image-wrapper fade-item fade-image">
    <img src={services[activeIndex].image} alt="" className="details-image" />
  </div>
)}
  <div className="details-description">
    <p className="fade-item fade-text">{services[activeIndex].description}</p>
    {services[activeIndex].links.map((link, i) => (
      <a
        key={i}
        href={link.href}
        className="details-link fade-item fade-button"
        target="_blank"
        rel="noreferrer"
      >
        {link.label}
      </a>
    ))}
  </div>
</div>
    </div>
    </div>
  );
}