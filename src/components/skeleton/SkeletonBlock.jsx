import React from 'react';
import './Skeleton.css';

const SkeletonBlock = ({ variant = 'textBlock' }) => {
  return (
    <div className="skeleton-wrapper">
      {variant === 'textBlock' ? (
        <div className="skeleton-card">
          {/* Левая часть — изображение */}
          <div className="skeleton-image" />

          {/* Правая часть — заголовок и текст */}
          <div className="skeleton-content">
            <div className="skeleton-title" />
            <div className="skeleton-text short" />
            <div className="skeleton-text medium" />
            <div className="skeleton-text medium" />
            <div className="skeleton-text medium" />
            <div className="skeleton-text medium" />
          </div>
        </div>
      ) : variant === 'fullwidth' ? (
        <div className="skeleton-fullwidth" />
      ) : null}
    </div>
  );
};

export default SkeletonBlock;