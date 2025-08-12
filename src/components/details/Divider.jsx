import React from 'react';
import '../../styles/components/divider.css';

const Divider = ({title, itemTitle='جمله کوتاه یا یک تایتل'}) => {
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
        {itemTitle}
      </h2>
    </div>
  );
};

export default Divider;