import React, { lazy } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./About.css";
import { diplomas, slidesExam } from "../../ultils/options";
import LazyLoadComponent from "../../components/skeleton/lazyProvider";

const LazyTextImageBlock = lazy(() =>
  import("../../components/TextImageBlocks/TextImageBlock")
);
const LazyMosaicGrid = lazy(() =>
  import("../../components/ImageGrid/MosaicGrid")
);
const LazyUniformGrid = lazy(() =>
  import("../../components/UniformGrid/UniformGrid")
);
const LazyImageGallery = lazy(() =>
  import("../../components/ImageLightBoxGallery/ImageGallery")
);
const LazyCitiesSlider = lazy(() =>
  import("../../components/WordCarousel/WordCarousel")
);
export default function About() {
  return (
    <div className="container">
      <PageHeader title="О нас" />

      <LazyLoadComponent skeletonVariant="textBlock">
        <LazyTextImageBlock
          title={"О компании"}
          imageWidth="300px"
          image={"/img/examples/1112.png"}
          imageHeight="300px"
          text={
            "Наша компания является признанным экспертом в сфере металлообработки с более чем 15-летним опытом успешной работы на рынке. Мы располагаем крупным современным парком оборудования, включающим свыше 30 единиц станков с ЧПУ, что позволяет нам гарантированно изготавливать детали сложнейших конфигураций с высочайшей точностью обработки до 7-го квалитета включительно."
          }
        />
      </LazyLoadComponent>

      <LazyLoadComponent skeletonVariant="textBlock">
        <LazyTextImageBlock
          image={"/img/examples/222.png"}
          reversed={true}
          title={"Производим на собственном оборудовании"}
          imageWidth="300px"
          imageHeight="300px"
          text={
            "В нашем распоряжении — современный парк станков с ЧПУ: от токарных центров до пятикоординатных обрабатывающих центров. Все детали изготавливаются силами нашей команды — от заготовки до финишной обработки и контроля качества.Обработка широкого спектра материалов: Алюминий, Латунь, Медь, Бронза, Мельхиор, Нержавеющая сталь, Жаропрочные сплавы (включая 36НХТЮ, 29НК, 47НД), Псевдосплавы (МД-40, МД-50), а также конструкционные полимеры (Капролон, Стеклотекстолит) и другие."
          }
        />
      </LazyLoadComponent>
      <LazyLoadComponent skeletonVariant="textBlock">
        <LazyTextImageBlock
          image={"/img/examples/333.png"}
          title={"Статус и компетенции"}
          imageWidth="300px"
          text={
            "Являемся надежным подрядчиком для крупнейших промышленных предприятий и концернов.Обладаем подтвержденным опытом и необходимыми компетенциями для работы в рамках Федерального закона № 275-ФЗ (ГОЗ)."
          }
        />
      </LazyLoadComponent>

      {/* <LazyLoadComponent skeletonVariant="fullwidth">
        <LazyMosaicGrid images={images} />
      </LazyLoadComponent> //TODO

      <LazyLoadComponent skeletonVariant="fullwidth">
        <LazyUniformGrid images={images} />
      </LazyLoadComponent> //TODO */}

      {/* <div className="page-header-wrapper">
        <PageHeader title="Наши достижения" />
      </div> */}

      {/* <LazyLoadComponent skeletonVariant="fullwidth">
        <LazyImageGallery images={diplomas} />
      </LazyLoadComponent> */}

      <div className="page-header-wrapper">
        <LazyLoadComponent skeletonVariant="fullwidth">
          <LazyCitiesSlider slides={slidesExam} />
        </LazyLoadComponent>
      </div>
    </div>
  );
}
