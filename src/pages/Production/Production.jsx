import React from 'react'
import "./Production.css"
import UniformGrid from '../../components/UniformGrid/UniformGrid';
import PageHeader from '../../components/PageHeader/PageHeader';
import TextImageBlock from '../../components/TextImageBlocks/TextImageBlock';
export default function Production() {
   const images = [
    { src: "/public/img/works/IMG_1668.jpeg", title: "ipsum dolor sit amet", className: "size-2x2" },
    { src: "/public/img/works/IMG_1670.jpeg", title: "ipsum dolor sit amet", className: "size-2x1" },
    { src: "/public/img/works/IMG_1671.jpeg", title: "ipsum dolor sit amet", className: "size-1x2" },
    { src: "/public/img/works/IMG_16722.jpg", title: "ipsum dolor sit amet", className: "size-1x1" },
    { src: "/public/img/works/IMG_1673.jpeg", title: "ipsum dolor sit amet", className: "size-2x1" },
    { src: "/public/img/works/IMG_1674.jpeg", title: "ipsum dolor sit amet", className: "size-1x1" },
    { src: "/public/img/works/IMG_1675.jpeg", title: "ipsum dolor sit amet", className: "size-1x1" },
    { src: "/public/img/works/IMG_1676.jpeg", title: "ipsum dolor sit amet", className: "size-1x1" },
    { src: "/public/img/works/IMG_1677.jpeg", title: "ipsum dolor sit amet", className: "size-1x1" },
    { src: "/public/img/works/IMG_1678.jpeg", title: "ipsum dolor sit amet", className: "size-1x1" },
  ];
  return (
    <div className='container'>
      <PageHeader title="Оборудование" />
      <TextImageBlock image={"/public/img/cnc/5.jpg"} title={"Вертикально-фрезерные станки с числовым программным управлением (ЧПУ)"} subtitle={"В наличии: 6 единиц"} text={"Максимальные габариты обрабатываемых деталей: 900 × 450 × 600 мм"} />
      <TextImageBlock  reversed={true} image={"/public/img/cnc/5.jpg"} title={"Электроэрозионный копировально-прошивной станок"} subtitle={"В наличии: 1 единица"} text={"Максимальные габариты обрабатываемых деталей: 350 × 250 × 200 мм"} />
      <TextImageBlock image={"/public/img/cnc/5.jpg"} title={"Пятикоординатные обрабатывающие центры (3+2) с ЧПУ"} subtitle={"В наличии: 2 единицы"} text={"Максимальные габариты обрабатываемых деталей: 600 × 600 × 500 мм"} />
      <TextImageBlock reversed={true} image={"/public/img/cnc/5.jpg"} title={"Токарные обрабатывающие центры с числовым программным управлением (ЧПУ)"} subtitle={"В наличии: 3 единицы"} text={"Максимальные габариты обрабатываемых деталей: ⌀480 × 500 мм"} />
      <TextImageBlock image={"/public/img/cnc/5.jpg"} title={"Двухшпиндельный автомат продольного точения с функцией фрезерования и ЧПУ"} subtitle={"В наличии: 1 единица"} text={"Максимальные габариты обрабатываемых деталей: ⌀20 × 180 мм"} />
      <TextImageBlock reversed={true} image={"/public/img/cnc/5.jpg"} title={"Электроэрозионные проволочно-вырезные станки с числовым программным управлением (ЧПУ)"} subtitle={"В наличии: 4 единицы"} text={"Максимальные габариты обрабатываемых деталей: 630 × 500 × 500 мм"} />
      <div className="page-header-wrapper">
      <PageHeader title="Примеры работ" />
      </div>
      <UniformGrid images={images} />
    </div>
  )
}
