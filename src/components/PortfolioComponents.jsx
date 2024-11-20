
import React from 'react';
import projectImg from './../assets/Images/bg-img2.jpg';
import './../Styles/portfolio.css';

function PortfolioComponents({ item }) {
  return (
   
    <div className="project-grid">
      <img className='projects-img' src={projectImg} alt="Project" />
      <div className="overlay"></div>
      <h1>{item.portfolioTitle}</h1>
      <p>{item.portfolioDescription}</p>
    </div>
  );
}

export default PortfolioComponents;
