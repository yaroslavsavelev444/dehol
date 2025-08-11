import React, { useEffect, useRef, useState } from "react";
import "./YMap.css";

const YandexMap = () => {
  const [isActive, setIsActive] = useState(false);
  const mapRef = useRef(null);

  // Добавляем параметры для темной темы
  // const mapUrl = "https://yandex.ru/map-widget/v1/?" +
  //   "um=constructor%3Aba76c403644e6dfb2686e6fad6b139a32079d8b1b267c5079fb94b3ff1fa621e" +
  //   "&source=constructor" +
  //   "&theme=dark"; // Основной параметр темы

  // // Альтернативный вариант с полной кастомизацией:
  // /*
  const mapUrl =
    "https://yandex.ru/map-widget/v1/?" +
    "um=constructor%3Aba76c403644e6dfb2686e6fad6b139a32079d8b1b267c5079fb94b3ff1fa621e" +
    "&source=constructor" +
    "&theme=dark" +
    "&color=%2300b4d8" + // Цвет меток
    "&contrast=0.9" + // Контрастность (0.8-1.2)
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (mapRef.current && !mapRef.current.contains(event.target)) {
          setIsActive(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

  return (
    <div
      className={`map-container ${isActive ? "active" : ""}`}
      ref={mapRef}
      onClick={() => setIsActive(true)}
    >
      <iframe
        src={mapUrl} // Используем модифицированный URL
        width="100%"
        height="400"
        frameBorder="0"
        title="Yandex Map"
      ></iframe>

      {!isActive && (
        <div className="map-overlay">
          <div className="map-instruction">
            <div className="instruction-text">
              Нажмите на карту для взаимодействия
            </div>
          </div>
        </div>
      )}

      {isActive && (
        <div className="map-hint">
          <span className="hint-icon">ⓘ</span> Кликните вне карты, чтобы выйти
        </div>
      )}
    </div>
  );
};

export default YandexMap;
