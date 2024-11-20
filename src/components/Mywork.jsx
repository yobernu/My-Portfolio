// Mywork.jsx
import React from 'react';
import './../Styles/my-work.css';
import workIcon from './../assets/Images/icons.png'

function Mywork({ item }) {


  return (
    <div className='my-work-item'>
      <img src={workIcon} alt="Background" />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
}

export default Mywork;
