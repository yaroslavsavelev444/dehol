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
import { diplomas, images, slidesExam } from '../../ultils/options';
import UniformGrid from '../../components/UniformGrid/UniformGrid';
export default function About() {

  return (
    <div className='container'>
      <PageHeader title="О нас" />
      <div className="text-image-wrapper">
        <TextImageBlock image={"/public/img/cnc/2.jpg"} title={"Lorem ipsum dolor sit amet."} subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, pariatur."} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, reprehenderit dignissimos, magni consequatur hic voluptate architecto expedita quo placeat voluptates, qui provident illum optio fuga vitae cumque? Ea commodi neque quam ipsam facilis doloribus eos, repellendus eaque saepe, facere ab praesentium tenetur beatae cumque, placeat dolore quas rem animi repellat!"} />
        <TextImageBlock image={"/public/img/cnc/3.jpg"} reversed={true} title={" ipsum dolor sit amet."} subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, pariatur."} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, reprehenderit dignissimos, magni consequatur hic voluptate architecto expedita quo placeat voluptates, qui provident illum optio fuga vitae cumque? Ea commodi neque quam ipsam facilis doloribus eos, repellendus eaque saepe, facere ab praesentium tenetur beatae cumque, placeat dolore quas rem animi repellat!"} />
        <TextImageBlock image={"/public/img/cnc/5.jpg"} title={" ipsum dolor sit amet."} subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, pariatur."} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, reprehenderit dignissimos, magni consequatur hic voluptate architecto expedita quo placeat voluptates, qui provident illum optio fuga vitae cumque? Ea commodi neque quam ipsam facilis doloribus eos, repellendus eaque saepe, facere ab praesentium tenetur beatae cumque, placeat dolore quas rem animi repellat!"} />
      </div>
      <MosaicGrid images={images} />
      <UniformGrid images={images} />
      <div className="page-header-wrapper">
              <PageHeader title="Наши достижения" />
      </div>
      
      <ImageGallery images={diplomas} />
      <div className="page-header-wrapper">
      <CitiesSlider slides={slidesExam} />
      </div>
      <div className="page-header-wrapper">
      <PageHeader title="Мы на карте" />
      </div>
      <YandexMap />
    </div>
  )
}
