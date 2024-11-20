// App.jsx
import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody';
import Mywork from './components/Mywork';
import mybody from './js/mybody';
import mywork from './js/mywork';
import profile from './js/profile';
import skills from './js/skills';
import myportfolio from './js/portfolio'
import socials from './js/socialHandle'
import PortfolioHead from './components/PortfolioHead';
import PortfolioComponents from './components/PortfolioComponents';
import Resume from './components/Resume';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
      const [count, setCount] = useState(0);

      function renderCards() {
         return mybody.map((item) => {
            return <MainBody key={item.id} item={item} />
         }
          
        );
      }

      function renderWorks() {
        return mywork.map((item) => {
           return <Mywork key={item.id} item={item} />
        }
         
       );
     }

     function renderPortfolio() {
      return myportfolio.map((item) => {
        return <PortfolioComponents key={item.id} item={item} />
      });
     }


      

      function renderProfile() {
        return profile.map((item) => {
          return <Profile key={item.id} item={item} />
        });
       }
      
       function renderSocialHandles() {
        return socials.map((item) => {
          return <Footer key={item.id} item={item} />
        });
       }
      
      return (
        <div>
          <Navbar />
          <section className="my-body-section">
            {renderCards()}
          </section>
          <section className="my-work-section">
            <h1 className='mywork-header'>My <strong>works</strong></h1>
            <div className='my-work'>
               {renderWorks()}
            </div>
          </section>

          <section className='portfolio-section'>
            <div className="portfolio">
                <div className="portfolio-head">
                  <PortfolioHead />
                </div>
                <div className="projects-container">
                    {renderPortfolio()}
               </div>
            </div>
          </section>

          <div style={{ padding: "80px", 
                        minWidth: "400px", 
                        margin: "auto", 
                        backgroundColor: '#ccc',
                        alignItem: 'center',
                        justifyContent: 'center', 
                        textAlign: 'center', 
                        display: 'flex'}}>
            
            <div className="resume">
                <h2>My <strong>Skills</strong></h2>
                <hr></hr>
                {skills.map((skill, index) => (
                  <Resume
                    key={index}
                    label={skill.name}
                    percentage={skill.level}
                  />
                ))}
            </div>
            
            <div className="profile">
              {renderProfile()}
            </div>
          </div>
          

          <Contact />
          <footer className="footer">
              <p>&copy; 2024 My Portfolio. All Rights Reserved.😎</p>
              <div className="footer-content">
                {renderSocialHandles()}
              </div>
          </footer>
        </div>
      );
    }

export default App;


