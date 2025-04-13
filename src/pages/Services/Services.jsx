import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import './Services.css'
import { ServicesGrid } from '../../components/ServicesGrid/ServicesGrid';
import ServicesIconsGrid from '../../components/ServicesIconsGrid/ServicesIconsGrid';

export default function Services() {

  const servicesData = [
    {
      title: 'Металлобработка',
      description: 'Современная обработка деталей на станках с ЧПУ.',
      items: [
        'обработка высокой точности',
        'работа с чертежами',
        'производство сложных форм'
      ]
    },
    {
      title: 'Токарная обработка',
      description: 'Серийные и единичные заказы с точной геометрией.',
      items: [
        'обработка валов, втулок',
        'мелкие и крупные партии',
        'точность до 0.01 мм'
      ]
    },
    {
      title: 'Фрезерная обработка',
      description: 'Комплексные токарно-фрезерные работы под ключ.',
      items: [
        'металлические и пластиковые изделия',
        'обработка по 3–5 осям',
        'поддержка 3D моделей'
      ]
    },
    {
      title: 'Шлифовка',
      description: 'Все виды шлифовальных работ на надёжных станках.',
      items: [
        'плоская и круглая шлифовка',
        'работа с твёрдыми сплавами',
        'индивидуальные решения'
      ],
      note: 'включая нестандартные задачи'
    }
  ];

  return (
    <div className='container'>
            <PageHeader title="Услуги " />
              <ServicesGrid services={servicesData} />
              <ServicesIconsGrid />
    </div>
  )
}
