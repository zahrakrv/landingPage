import React from 'react';
import {ArrowIcon} from './ArticleCard.jsx'
import {CalendarIcon} from './ArticleCard.jsx'
import '../../styles/components/secondArticleCard.css';

const SecondArticleCard = ({ imageUrl, tags, title, date, onArrowClick }) => {
  return (
    <div className="card-component">
      <div className="card-header">
       
        <div className="tags-container">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="date-container">
        <CalendarIcon /> 
          <span>{date}</span>
        </div>
      </div>
      
      <h2 className="card-title">{title}</h2>
      
      <div className="card-image-container">
        <img src={imageUrl} alt={title} />
      </div>
      
      <div className="arrow-button" onClick={onArrowClick} aria-label="Previous">
          <ArrowIcon />
      </div>
    </div>
  );
};

export default SecondArticleCard;