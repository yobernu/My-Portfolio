// import React from 'react';
// import './../Styles/footer.css';  // Assuming you have a separate CSS file for styles

// function Footer({ item }) {
//   return (
//     <div className="social-icons" id='about'>
//        <a href={item.link} target="_blank" rel="noopener noreferrer"><img src={item.img} /> {item.name} </a>
//     </div>
//   );
// }

// export default Footer;
import React from 'react';
import './../Styles/footer.css';

function Footer({ item }) {
  // Destructure the component
  const Icon = item.icon;

  return (
    <div className="social-icons" id="about">
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        {/* Render the icon component */}
        <Icon size={20} style={{ marginRight: '8px' }} />
        {item.name}
      </a>
    </div>
  );
}

export default Footer;
