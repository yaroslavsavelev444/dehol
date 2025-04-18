import React, { lazy } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./About.css";
import { diplomas, images, slidesExam } from "../../ultils/options";
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
          image={"/public/img/cnc/2.jpg"}
          title={"Lorem ipsum dolor sit amet."}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, pariatur."
          }
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit..."}
        />
      </LazyLoadComponent>

      <LazyLoadComponent skeletonVariant="textBlock">
        <LazyTextImageBlock
          image={"/public/img/cnc/3.jpg"}
          reversed={true}
          title={" ipsum dolor sit amet."}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, pariatur."
          }
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit..."}
        />
      </LazyLoadComponent>
      <LazyLoadComponent skeletonVariant="textBlock">
        <LazyTextImageBlock
          image={"/public/img/cnc/5.jpg"}
          title={" ipsum dolor sit amet."}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, pariatur."
          }
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit..."}
        />
      </LazyLoadComponent>

      <LazyLoadComponent skeletonVariant="fullwidth">
        <LazyMosaicGrid images={images} />
      </LazyLoadComponent>

      <LazyLoadComponent skeletonVariant="fullwidth">
        <LazyUniformGrid images={images} />
      </LazyLoadComponent>

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
