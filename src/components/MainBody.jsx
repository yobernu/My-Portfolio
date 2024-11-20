import React from 'react'
import './../Styles/main-body.css'
import bgImg from './../assets/Images/bg-img.jpg'

// orginal image location (`./.${item.bgImg}`)


function MainBody({ item }) {
  return (
    <div className='main-body' id='home'>
        <img className='main-bg' src={bgImg} />
        <h1>{item.name}</h1>
        <h2>{item.title}</h2>

        <p>{item.description}</p>
        <button className='main-body-btn'>{item.start}</button>
    </div>
  )
}

export default MainBody