import React from 'react'
import YandexMap from '../../components/YMap/YMap'
import PageHeader from '../../components/PageHeader/PageHeader'
import TextImageBlock from '../../components/TextImageBlocks/TextImageBlock'
import MosaicGrid from '../../components/ImageGrid/MosaicGrid';
import './About.css'
import CompanyWorkPoints from '../../components/CompanyWorkPoints/CompanyWorkPoints';
import ImageGallery from '../../components/ImageLightBoxGallery/ImageGallery';
import WordCarousel from '../../components/WordCarousel/WordCarousel';
import CitiesSlider from '../../components/WordCarousel/WordCarousel';
export default function About() {
  
  const images = [
    { src: "/public/img/cnc/1.jpg", title: "ipsum dolor sit amet", className: "size-2x2" },
    { src: "/public/img/cnc/2.jpg", title: "ipsum dolor sit amet", className: "size-2x1" },
    { src: "/public/img/cnc/3.jpg", title: "ipsum dolor sit amet", className: "size-1x2" },
    { src: "/public/img/cnc/4.jpg", title: "ipsum dolor sit amet", className: "size-1x1" },
    { src: "/public/img/cnc/5.jpg", title: "ipsum dolor sit amet", className: "size-2x1" },
    { src: "/public/img/cnc/6.jpg", title: "ipsum dolor sit amet", className: "size-1x1" },
  ];

  const diplomas = [
    { src: "/img-global/iso9001 - 0001.jpg", title: "ipsum dolor sit amet", className: "size-2x2" },
    { src: "/img-global/iso9001 - 0002.jpg", title: "ipsum dolor sit amet", className: "size-2x2" },
    { src: "/img-global/iso9001 - 0003.jpg", title: "ipsum dolor sit amet", className: "size-2x2" },
    { src: "/img-global/iso9001 - 0004.jpg", title: "ipsum dolor sit amet", className: "size-2x2" },

  ];

  const slidesExam = [
    {
      city: 'Микрон',
      country: 'ТОЧНОСТЬ РАЗМЕРОВ',
      img: '/public/img/cnc/6.jpg'
    },
    {
      city: 'Контур',
      country: 'СООТВЕТСТВИЕ ЧЕРТЕЖУ',
      img: '/img/cnc/6.jpg'
    },
    {
      city: 'Шлиф',
      country: 'ЧИСТОТА ОБРАБОТКИ',
      img: '/img/cnc/6.jpg'
    },
    {
      city: 'Тайминг',
      country: 'ИЗГОТОВЛЕНИЕ В СРОК',
      img: '/img/cnc/6.jpg'
    },
    {
      city: 'Баланс',
      country: 'СПРАВЕДЛИВЫЕ ЦЕННИКИ',
      img: '/img/cnc/6.jpg'
    },
    {
      city: 'Гарант',
      country: 'ГАРАНТИЯ КАЧЕСТВА',
      img: '/img/cnc/6.jpg'
    }
  ];


  
  

  return (
    <div className='container'>
      <PageHeader title="О нас" />
      <div className="text-image-wrapper">
        <TextImageBlock image={"/public/img/cnc/2.jpg"} title={"Lorem ipsum dolor sit amet."} subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, pariatur."} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, reprehenderit dignissimos, magni consequatur hic voluptate architecto expedita quo placeat voluptates, qui provident illum optio fuga vitae cumque? Ea commodi neque quam ipsam facilis doloribus eos, repellendus eaque saepe, facere ab praesentium tenetur beatae cumque, placeat dolore quas rem animi repellat!"} />
        <TextImageBlock image={"/public/img/cnc/3.jpg"} reversed={true} title={" ipsum dolor sit amet."} subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, pariatur."} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, reprehenderit dignissimos, magni consequatur hic voluptate architecto expedita quo placeat voluptates, qui provident illum optio fuga vitae cumque? Ea commodi neque quam ipsam facilis doloribus eos, repellendus eaque saepe, facere ab praesentium tenetur beatae cumque, placeat dolore quas rem animi repellat!"} />
        <TextImageBlock image={"/public/img/cnc/5.jpg"} title={" ipsum dolor sit amet."} subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, pariatur."} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, reprehenderit dignissimos, magni consequatur hic voluptate architecto expedita quo placeat voluptates, qui provident illum optio fuga vitae cumque? Ea commodi neque quam ipsam facilis doloribus eos, repellendus eaque saepe, facere ab praesentium tenetur beatae cumque, placeat dolore quas rem animi repellat!"} />
      </div>
      <MosaicGrid images={images} />
      <CompanyWorkPoints />

      <PageHeader title="Наши достижения" />
      <ImageGallery images={diplomas} />
      <CitiesSlider slides={slidesExam} />
      <PageHeader title="Мы на карте" />
      <YandexMap />
    </div>
  )
}
