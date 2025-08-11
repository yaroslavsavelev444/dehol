import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./Contacts.css";
import { lazy } from "react";
import LazyLoadComponent from "../../components/skeleton/lazyProvider";

export default function Contacts() {
  const LazyYandexMap = lazy(() => import("../../components/YMap/YMap"));

  // Функция для скачивания файла из public/
  const downloadAccountCard = () => {
    // Создаем ссылку на файл в public/
    const fileUrl = import.meta.env.VITE_BASE_URL + "/Учетная_карточка_Конструктор.docx";
    
    // Создаем временную ссылку для скачивания
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "Учетная_карточка_Конструктор.docx");
    document.body.appendChild(link);
    link.click();
    
    // Очистка
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  return (
    <div>
      <PageHeader title="Контакты" />
      <div className="text-wrapper">
        <div className="dual-non-equals-wrapper">
          <div className="left-side">
            <h2 style={{marginTop: 0}}>ООО НПО "Констуктор"</h2>
            <a
              href="https://yandex.ru/maps/?text=Москва%2C%20ул.%20Примерная%2C%201"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              Рязань, ул. Шабулина, 9
            </a>
            <p>
            <a href="tel:+79209680801" className="contact-item">
              +7 (920) 968-08-01
            </a>
            </p>
            <p>
              <a href="mailto:npoconstructor@yandex.ru" className="contact-item">
                npoconstructor@yandex.ru
              </a>
            </p>
            <span className="contact-item">Пн–Пт: 9:00–18:00</span>
            
            {/* Кнопка скачивания */}
            <div style={{marginTop: '20px'}}>
              <button 
                onClick={downloadAccountCard}
                className="download-button"
                style={{
                  padding: '10px 20px',
                  background: '#2c3e50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                Скачать учетную карточку
              </button>
            </div>
          </div>
          <div className="right-side">
            Проезд на автотранспорте: см. выделенный маршрут на карте ниже 
          </div>
        </div>
      </div>
      <div className="page-header-wrapper">
        <PageHeader title="Мы на карте" />
      </div>

      <LazyLoadComponent skeletonVariant="fullwidth">
        <LazyYandexMap />
      </LazyLoadComponent>
    </div>
  );
}