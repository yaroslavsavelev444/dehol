import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./Contacts.css";
import { lazy } from "react";
import LazyLoadComponent from "../../components/skeleton/lazyProvider";
export default function Contacts() {
  const LazyYandexMap = lazy(() => import("../../components/YMap/YMap"));

  return (
    <div>
      <PageHeader title="Контакты" />
      <div className="text-wrapper">
        <div className="dual-non-equals-wrapper">
          <div className="left-side">
            <h2>ООО НПО "Констуктор"</h2>
            <a
              href="https://yandex.ru/maps/?text=Москва%2C%20ул.%20Примерная%2C%201"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              Рязань, ул. Шабулина, 9
            </a>
            <a href="tel:+79991234567" className="contact-item">
              {" "}
              +7 (999) 123-45-67
            </a>
            <p>
              {" "}
              <a href="mailto:optimazavod@yandex.ru" className="contact-item">
                optimazavod@yandex.ru
              </a>
            </p>
            <span className="contact-item">Пн–Пт: 9:00–18:00</span>
          </div>
          <div className="right-side">
            ПРОЕЗД на автотранспорте: КПП №1. В Яндекс Навигаторе вводите адрес:
            Рязань , ул. Шабулина 9. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ut iusto autem debitis suscipit qui blanditiis consequuntur, non aut impedit.
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
