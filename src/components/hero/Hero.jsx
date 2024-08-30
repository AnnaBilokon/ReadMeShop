import React from 'react'
import './hero.css'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_new.svg'

function Hero() {
  return (
    <div className="hero">
      <div className="hero_left">
        <h2>What Will You Read Next?</h2>
        <div>
          <div className="hero_hand_icon">
            <p>Explore to find your new favorite book</p>
          </div>
        </div>
        <div className="hero_latest_btn">
          Explore
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero_right">
        <img src={hero_image} alt="hero_picture" />
      </div>
    </div>
  )
}

export default Hero
