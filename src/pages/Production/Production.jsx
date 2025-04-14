import React, { lazy } from "react";
import "./Production.css";
import { imagesProduction } from "../../ultils/options";
import LazyLoadComponent from "../../components/skeleton/lazyProvider";
const TextImageBlock = lazy(() =>
  import("../../components/TextImageBlocks/TextImageBlock")
);
const PageHeader = lazy(() => import("../../components/PageHeader/PageHeader"));
const UniformGrid = lazy(() =>
  import("../../components/UniformGrid/UniformGrid")
);

export default function Production() {
  return (
    <div className="container">
      <PageHeader title="Оборудование" />
      <LazyLoadComponent skeletonVariant="textBlock">
        <TextImageBlock
          image={"/public/img/cnc/5.jpg"}
          title={
            "Вертикально-фрезерные станки с числовым программным управлением (ЧПУ)"
          }
          subtitle={"В наличии: 6 единиц"}
          text={
            "Максимальные габариты обрабатываемых деталей: 900 × 450 × 600 мм"
          }
        />
      </LazyLoadComponent>
      <LazyLoadComponent skeletonVariant="textBlock">
        <TextImageBlock
          reversed={true}
          image={"/public/img/cnc/5.jpg"}
          title={"Электроэрозионный копировально-прошивной станок"}
          subtitle={"В наличии: 1 единица"}
          text={
            "Максимальные габариты обрабатываемых деталей: 350 × 250 × 200 мм"
          }
        />
      </LazyLoadComponent>
      <LazyLoadComponent skeletonVariant="textBlock">
        <TextImageBlock
          image={"/public/img/cnc/5.jpg"}
          title={"Пятикоординатные обрабатывающие центры (3+2) с ЧПУ"}
          subtitle={"В наличии: 2 единицы"}
          text={
            "Максимальные габариты обрабатываемых деталей: 600 × 600 × 500 мм"
          }
        />
      </LazyLoadComponent>
      <LazyLoadComponent skeletonVariant="textBlock">
        <TextImageBlock
          reversed={true}
          image={"/public/img/cnc/5.jpg"}
          title={
            "Токарные обрабатывающие центры с числовым программным управлением (ЧПУ)"
          }
          subtitle={"В наличии: 3 единицы"}
          text={"Максимальные габариты обрабатываемых деталей: ⌀480 × 500 мм"}
        />
      </LazyLoadComponent>
      <LazyLoadComponent skeletonVariant="textBlock">
        <TextImageBlock
          image={"/public/img/cnc/5.jpg"}
          title={
            "Двухшпиндельный автомат продольного точения с функцией фрезерования и ЧПУ"
          }
          subtitle={"В наличии: 1 единица"}
          text={"Максимальные габариты обрабатываемых деталей: ⌀20 × 180 мм"}
        />
      </LazyLoadComponent>
      <LazyLoadComponent skeletonVariant="textBlock">
        <TextImageBlock
          reversed={true}
          image={"/public/img/cnc/5.jpg"}
          title={
            "Электроэрозионные проволочно-вырезные станки с числовым программным управлением (ЧПУ)"
          }
          subtitle={"В наличии: 4 единицы"}
          text={
            "Максимальные габариты обрабатываемых деталей: 630 × 500 × 500 мм"
          }
        />
      </LazyLoadComponent>
      <div className="page-header-wrapper">
        <PageHeader title="Примеры работ" />
      </div>
      <LazyLoadComponent skeletonVariant="fullwidth">
        <UniformGrid images={imagesProduction} />
      </LazyLoadComponent>
    </div>
  );
}
