import React from 'react';
import '../../styles/components/secondArticleCard.css';
import {CalendarIcon} from './ArticleCard.jsx'

const SecondArticleCard = ({ imageUrl, tags, title, date }) => {
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
      
      <a href="#" className="back-button">
        <svg xmlns="http://www/w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
            <path d="M-1.15096e-07 9.34823L16 0L8.22921 9.4647L15.7554 19L-1.15096e-07 9.34823Z" fill="black"/>
        </svg>
      </a>
    </div>
  );
};

export default SecondArticleCard;