import React, { useState, useEffect } from 'react';
import './../Styles/nav.css';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // If scrolling down, hide navbar
      setIsVisible(false);
    } else {
      // If scrolling up, show navbar
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className={`nav-div ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="profile">
        <p>😊 Profile</p>
      </div>
      <div className="nav-lists-div">
        <ul>
          <li className="nav-lists main-nav">Home</li>
          <li className="nav-lists">My Work</li>
          <li className="nav-lists">Portfolio</li>
          <li className="nav-lists">Resume</li>
          <li className="nav-lists">About</li>
          <li className="nav-lists">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
