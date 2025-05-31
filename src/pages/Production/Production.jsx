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
          image={"/public/img/cnc/cnc1.jpg"}
          title={
            "Вертикально-фрезерные станки с ЧПУ"
          }
          subtitle={"В наличии: 6 единиц"}
          text={
            "Предназначены для высокоточной 3-осевой обработки деталей из металла и сплавов. Обрабатываемые детали — до 900×450×600 мм."
          }
        />
      </LazyLoadComponent>
      <LazyLoadComponent skeletonVariant="textBlock">
        <TextImageBlock
          reversed={true}
          image={"/public/img/cnc/cnc2.jpg"}
          title={"Электроэрозионный копировально-прошивной станок"}
          subtitle={"В наличии: 1 единица"}
          text={
            "Применяется для формообразования сложных внутренних контуров и прецизионной обработки твердых материалов. Максимальный размер детали — 350×250×200 мм."
          }
        />
      </LazyLoadComponent>
      <LazyLoadComponent skeletonVariant="textBlock">
        <TextImageBlock
          image={"/public/img/cnc/cnc3.jpg"}
          title={"Пятикоординатные обрабатывающие центры (3+2) с ЧПУ "}
          subtitle={"В наличии: 2 единицы"}
          text={
            "Позволяют обрабатывать детали со сложной геометрией за один установ. Максимальные размеры заготовок — 600×600×500 мм."
          }
        />
      </LazyLoadComponent>
      <LazyLoadComponent skeletonVariant="textBlock">
        <TextImageBlock
          reversed={true}
          image={"/public/img/cnc/cnc4.jpg"}
          title={
            "Токарные обрабатывающие центры с числовым программным управлением (ЧПУ)"
          }
          subtitle={"В наличии: 3 единицы"}
          text={"Предназначены для токарной обработки цилиндрических и конических деталей с высокой точностью. Обрабатываются заготовки до Ø480×500 мм"}
        />
      </LazyLoadComponent>
      <LazyLoadComponent skeletonVariant="textBlock">
        <TextImageBlock
          image={"/public/img/cnc/cnc5.jpg"}
          title={
            "Двухшпиндельный автомат продольного точения с функцией фрезерования и ЧПУ"
          }
          subtitle={"В наличии: 1 единица"}
          text={"Обеспечивает точную комплексную обработку мелких прецизионных деталей Ø20×180 мм в автоматическом режиме"}
        />
      </LazyLoadComponent>
      <LazyLoadComponent skeletonVariant="textBlock">
        <TextImageBlock
          reversed={true}
          image={"/public/img/cnc/cnc6.jpg"}
          title={
            "Электроэрозионные проволочно-вырезные станки с числовым программным управлением (ЧПУ)"
          }
          subtitle={"В наличии: 4 единицы"}
          text={
            "Идеальны для резки твердых металлов и создания тонких контуров высокой сложности. Поддерживают обработку деталей до 630×500×500 мм."
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
