import React, { useEffect } from 'react';
import 'aos/dist/aos.css';  // Не забыть подключить стили AOS
import AOS from 'aos';
import './CompanyWorkPoints.css';

const CompanyWorkPoints = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 500 }); // Инициализация AOS
  }, []);

  const points = [
    { icon: '', text: 'Точность размеров' },
    { icon: '', text: 'Полное соответствие изготовленной детали чертежу' },
    { icon: '', text: 'Чистота обработки поверхностей' },
    { icon: '', text: 'Изготовление деталей в срок' },
    { icon: '', text: 'Адекватная стоимость' },
    { icon: '', text: 'Гарантии качества' }
  ];

  return (
    <div className="work-points-container">
      <h2 className="section-title">Наши принципы работы</h2>
      <ul className="work-points-list">
        {points.map((point, index) => (
          <li
            key={index}
            className="work-point"
            data-aos="fade-up"
            data-aos-delay={`${index * 500}`}
          >
            <span className="icon">{point.icon}</span>
            <span className="text">{point.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyWorkPoints;