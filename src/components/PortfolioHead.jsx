
import React from 'react';
import './../Styles/portfolio.css';

function Portfolio() {
  return (
      <div className="portfolio-head">
        <h1>MY <strong>PORTFOLIO</strong></h1>
        <ul className="portfolio-item-list">
          <li className="portfolio-item">All</li>
          <li className="portfolio-item">HTML</li>
          <li className="portfolio-item">Photoshop</li>
          <li className="portfolio-item">Mobile Dev</li>
          <li className="portfolio-item">Web Dev</li>
        </ul>
      </div>
    
  );
}

export default Portfolio;
