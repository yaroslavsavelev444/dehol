import React, { useEffect, useRef, useState } from 'react';
import './PageHeader.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect/dist/core';

const PageHeader = ({ title }) => {
  const titleRef = useRef(null);
  const [hasTyped, setHasTyped] = useState(false); // Флаг для отслеживания выполненной анимации

  useEffect(() => {
    // Инициализация AOS
    AOS.init({
      duration: 800,
      once: true, // Это позволит анимациям AOS срабатывать только один раз
      offset: 100,
    });

    const handleScroll = () => {
      const rect = titleRef.current?.getBoundingClientRect();
      if (rect && rect.top <= window.innerHeight && !hasTyped) {
        const typewriter = new Typewriter(titleRef.current, {
          autoStart: true,
          loop: false,
          delay: 50,
          cursor: '|',
        });

        typewriter.typeString(title).start();
        setHasTyped(true); // Устанавливаем флаг, чтобы анимация не повторялась
      }
    };

    const observer = new IntersectionObserver((entries) => {
      // Если элемент появляется в области видимости
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasTyped) {
          const typewriter = new Typewriter(titleRef.current, {
            autoStart: true,
            loop: false,
            delay: 50,
            cursor: '|',
          });

          typewriter.typeString(title).start();
          setHasTyped(true); // Устанавливаем флаг, чтобы анимация не повторялась
        }
      });
    }, { threshold: 0.1 });

    // Начальная проверка, если элемент уже виден
    observer.observe(titleRef.current);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect(); // Отключаем observer
    };
  }, [title, hasTyped]);

  return (
    <div className="page-header">
      <div className="header-content">
        <div className="header-line" />
        <h1
          className="header-title"
          ref={titleRef}
          data-aos="fade-up"
          data-aos-once="true"
        />
      </div>
    </div>
  );
};

export default PageHeader;