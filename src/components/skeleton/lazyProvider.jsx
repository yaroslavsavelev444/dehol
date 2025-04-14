import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import SkeletonBlock from './SkeletonBlock';


function LazyLoadComponent({ children, threshold = 0.2, skeletonVariant = 'textBlock' }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold });
  
    return (
      <div ref={ref} style={{ minHeight: '200px' }}>
        {inView ? (
          <Suspense fallback={<SkeletonBlock variant={skeletonVariant} />}>
            {children}
          </Suspense>
        ) : (
          <SkeletonBlock variant={skeletonVariant} />
        )}
      </div>
    );
  }
  
  export default LazyLoadComponent;