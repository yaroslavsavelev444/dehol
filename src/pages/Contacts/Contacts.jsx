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
            Волгоградский проспект, д. 42, строение 5 (не корпус или владение!).
            Навигатор Вас приведет на КПП №1, необходимо зайти на КПП для
            получения пропуска. При себе обязательно иметь паспорт, водительское
            удостоверение, при получении необходимо сказать, что Вы в ООО «НЦК».
            После получения пропуска следуйте прямо до оранжево-красного здания,
            затем поворачиваете направо. • Если Вам на склад для
            погрузки/выгрузки - 21 и 22 ворота. У ворот есть звонок для вызова
            сотрудника склада. • Если Вам в офис - следуйте прямо до тех пор,
            пока не увидите вывеску НЦК на фасаде здания слева. КПП №2. В Яндекс
            Навигаторе необходимо ввести адрес: Волгоградский проспект, д. 42,
            строение 16 (заезд с ул. Шоссейная). Навигатор приведет Вас к Сити
            Отелю, справа от него находится шлагбаум, проезжаете через него
            прямо до следующего шлагбаума. Далее необходимо припарковаться и
            зайти на КПП №2 для получения пропуска. При себе обязательно иметь
            паспорт, водительское удостоверение. При получении необходимо
            сказать, что Вы в ООО «НЦК». После проезда через шлагбаум следуйте
            прямо, Вам нужно оранжево-красное здание справа. • Если Вам на склад
            для погрузки/выгрузки - 21 и 22 ворота. У ворот есть звонок для
            вызова сотрудника склада. • Если Вам в офис - следуйте прямо до тех
            пор, пока не увидите вывеску НЦК на фасаде здания справа от Вас.{" "}
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
