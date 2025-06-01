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
          image={"/img/examples/111.png"}
          title={"Опыта больше, чем слов"}
          imageWidth="300px"
  imageHeight="300px"
          subtitle={
            "Мы работаем с 2007 года и специализируемся на изготовлении металлических деталей по чертежам заказчика. За это время выполнили сотни заказов для машиностроительных, приборостроительных и оборонных предприятий."
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
          subtitle={
            "В нашем распоряжении — современный парк станков с ЧПУ: от токарных центров до пятикоординатных обрабатывающих центров. Все детали изготавливаются силами нашей команды — от заготовки до финишной обработки и контроля качества."
          }
        />
      </LazyLoadComponent>
      <LazyLoadComponent skeletonVariant="textBlock">
        <LazyTextImageBlock
          image={"/img/examples/333.png"}
          title={"Детали говорят сами за себя"}
          imageWidth="300px"
          subtitle={
            "Среди реализованных заказов — изготовление формующих элементов, прецизионных валов, крепежных узлов и сложных корпусных деталей. Примеры работ представлены на сайте — это лучшее подтверждение нашей компетенции."
          }
        />
      </LazyLoadComponent>

      {/* <LazyLoadComponent skeletonVariant="fullwidth">
        <LazyMosaicGrid images={images} />
      </LazyLoadComponent> */}

      {/* <LazyLoadComponent skeletonVariant="fullwidth">
        <LazyUniformGrid images={images} />
      </LazyLoadComponent> */}

       <div className="page-header-wrapper">
        <PageHeader title="Наши достижения" />
      </div>

       <LazyLoadComponent skeletonVariant="fullwidth">
        <LazyImageGallery images={diplomas} />
      </LazyLoadComponent> 

      <div className="page-header-wrapper">
        <LazyLoadComponent skeletonVariant="fullwidth">
          <LazyCitiesSlider slides={slidesExam} />
        </LazyLoadComponent>
      </div>

    </div>
  );
}
