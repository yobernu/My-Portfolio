import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import './../Styles/footer.css';  // Assuming you have a separate CSS file for styles

function Footer({ item }) {
  return (
    <div className="social-icons">
       <a href={item.link} target="_blank" rel="noopener noreferrer"><img src={item.img} /> {item.name} </a>
    </div>
  );
}

export default Footer;
