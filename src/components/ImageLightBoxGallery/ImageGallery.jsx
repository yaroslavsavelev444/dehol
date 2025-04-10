import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import "./ImageGallery.css"; // Стили для галереи

const images = [
  { src: "/public/img/", width: 4, height: 3 },
  { src: "/img-global/iso9001-0002.jpg", width: 4, height: 3 },
  { src: "/img-global/iso9001-0003.jpg", width: 4, height: 3 },
  // добавь свои изображения
];

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Галерея изображений */}
      <Gallery photos={images} onClick={(event, { index }) => openLightbox(index)} />

      {/* Модальное окно с полноэкранным просмотром */}
      <ModalGateway>
        {isModalOpen && images.length > 0 ? (
          <Modal onClose={() => setIsModalOpen(false)}>
            <Carousel
              currentIndex={currentImageIndex}
              views={images.map((x) => ({
                source: x.src,
                caption: `Image ${x.src}`,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};

export default ImageGallery;