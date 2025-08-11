import React, { lazy, Suspense } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Services.css';
import { servicesData } from '../../ultils/options';
import LazyLoadComponent from '../../components/skeleton/lazyProvider';


export default function Services() {
  const LazyServicesGrid = lazy(() => import('../../components/ServicesGrid/ServicesGrid'));
const LazyServicesIconsGrid = lazy(() => import('../../components/ServicesIconsGrid/ServicesIconsGrid'));
  return (
    <div className='container' style={{minHeight: 'auto'}}>
      <PageHeader title="Услуги" />

      <LazyLoadComponent skeletonVariant="fullwidth">
        <LazyServicesGrid services={servicesData} />
      </LazyLoadComponent>

      {/* <LazyLoadComponent skeletonVariant="fullwidth">
        <LazyServicesIconsGrid />
      </LazyLoadComponent> */}
    </div>
  );
}