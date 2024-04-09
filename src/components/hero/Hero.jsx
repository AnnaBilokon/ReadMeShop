import React from 'react'
import './hero.css'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

function Hero() {
  return (
    <div className="hero">
      <div className="hero_left">
        <h2>NEW ARRIVALS</h2>
        <div>
          <div className="hero_hand_icon">
            <p>new</p>
          </div>
          <p>books</p>
          <p>for booklovers</p>
        </div>
        <div className="hero_latest_btn">
          Bestsellers
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero_right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
