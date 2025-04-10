import React from 'react';
import './PageHeader.css';

const PageHeader = ({ title }) => {
  return (
    <div className="page-header">
      <div className="header-content">
        <div className="header-line" />
        <h1 className="header-title">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;