import React from 'react';
import '../../styles/components/divider.css';

const Divider = ({title}) => {
return (
    <div className="section-header-container">
      <div className="subtitle-row">
        <div className="line-wrapper">
          <div className="line"></div>
          <span className="brand-name">ONE GROUP</span>
        </div>
        <div className="diamond"></div>
        <span className="category-text">{title}</span>


      </div>
      <h2 className="main-title">
        جمله کوتاه یا یک تایتل
      </h2>
    </div>
  );
};

export default Divider;