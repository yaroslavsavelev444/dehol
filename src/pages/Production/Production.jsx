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
  const frez1 = "/img/frez/1.jpeg";
  const frez2 = "/img/frez/2.jpeg";
  const frez3 = "/img/frez/3.jpeg";
  const frez4 = "/img/frez/4.jpeg";
  const frez5 = "/img/frez/5.jpeg";
  const frez6 = "/img/frez/6.jpeg";
  const frez7 = "/img/frez/7.jpeg";
  const frez8 = "/img/frez/8.jpeg";
  const frez9 = "/img/frez/9.jpeg";
  const frez10 = "/img/frez/10.jpeg";
  const frez11 = "/img/frez/11.jpeg";
  const frez12 = "/img/frez/12.jpeg";
  const frez13 = "/img/frez/13.jpeg";

  const electro1 = "/img/electro/1.jpeg";
  const electro2 = "/img/electro/2.jpeg";

  const treetwo1 = "/img/frez32-stol/1.jpeg";
  const treetwo2 = "/img/frez32-stol/2.jpeg";
  const treetwo3 = "/img/frez32-stol/3.jpeg";
  const treetwo4 = "/img/frez32-stol/4.jpeg";
  const treetwo5 = "/img/frez32-stol/5.jpeg";

  const autProdol1 = "/img/aut-prodol/1.jpeg";
  const autProdol2 = "/img/aut-prodol/2.jpeg";
  const autProdol3 = "/img/aut-prodol/3.jpeg";

  const tokar1 = "/img/tokar/1.jpeg";
  const tokar2 = "/img/tokar/2.jpeg";
  const tokar3 = "/img/tokar/3.jpeg";

  const tokarfrez1 = "/img/tokar-frez/1.jpeg";
  const tokarfrez2 = "/img/tokar-frez/2.jpeg";

  return (
    <div className="container">
      <PageHeader title="Оборудование" />
      <LazyLoadComponent skeletonVariant="textBlock">
        <TextImageBlock
          images={[
            frez1,
            frez2,
            frez3,
            frez4,
            frez5,
            frez6,
            frez7,
            frez8,
            frez9,
            frez10,
            frez11,
            frez12,
            frez13,
          ]}
          title={"Фрезерные станки с ЧПУ"}
          subtitle={"В наличии: 15 единиц"}
          text={
            "Предназначены для высокоточной 3-осевой обработки деталей из металла и сплавов. Обрабатываемые детали — до 900×450×600 мм."
          }
        />
      </LazyLoadComponent>
      <LazyLoadComponent skeletonVariant="textBlock">
        <TextImageBlock
          reversed={true}
          images={[electro1, electro2]}
          title={"Электроэрозионный копировально-прошивной станок"}
          subtitle={"В наличии: 4 единица"}
          text={
            "Применяется для формообразования сложных внутренних контуров и прецизионной обработки твердых материалов. Максимальный размер детали — 350×250×200 мм."
          }
        />
      </LazyLoadComponent>
      <LazyLoadComponent skeletonVariant="textBlock">
        <TextImageBlock
          images={[treetwo1, treetwo2, treetwo3, treetwo4, treetwo5]}
          title={"Пятикоординатные обрабатывающие центры (3+2) с ЧПУ "}
          subtitle={"В наличии: 3 единицы"}
          text={
            "Позволяют обрабатывать детали со сложной геометрией за один установ. Максимальные размеры заготовок — 600×600×500 мм."
          }
        />
      </LazyLoadComponent>
      <LazyLoadComponent skeletonVariant="textBlock">
        <TextImageBlock
          reversed={true}
          images={[tokar1, tokar2, tokar3, tokarfrez1, tokarfrez2]}
          title={
            "Токарно-фрезерные обрабатывающие центры с числовым программным управлением (ЧПУ)"
          }
          subtitle={"В наличии: 7 единицы"}
          text={
            "Предназначены для токарной обработки цилиндрических и конических деталей с высокой точностью. Обрабатываются заготовки до Ø480×500 мм"
          }
        />
      </LazyLoadComponent>
      <LazyLoadComponent skeletonVariant="textBlock">
        <TextImageBlock
          images={[autProdol1, autProdol2, autProdol3]}
          title={
            "Двухшпиндельный автомат продольного точения с функцией фрезерования и ЧПУ"
          }
          subtitle={"В наличии: 3 единица"}
          text={
            "Обеспечивает точную комплексную обработку мелких прецизионных деталей Ø20×180 мм в автоматическом режиме"
          }
        />
      </LazyLoadComponent>
      {/* <LazyLoadComponent skeletonVariant="textBlock">
        <TextImageBlock
          reversed={true}
          image={ph6}
          title={
            "Электроэрозионные проволочно-вырезные станки с числовым программным управлением (ЧПУ)"
          }
          subtitle={"В наличии: 4 единицы"}
          text={
            "Идеальны для резки твердых металлов и создания тонких контуров высокой сложности. Поддерживают обработку деталей до 630×500×500 мм."
          }
        />
      </LazyLoadComponent> */}
      <div className="page-header-wrapper">
        <PageHeader title="Примеры работ" />
      </div>
      <LazyLoadComponent skeletonVariant="fullwidth">
        <UniformGrid images={imagesProduction} />
      </LazyLoadComponent>
    </div>
  );
}
