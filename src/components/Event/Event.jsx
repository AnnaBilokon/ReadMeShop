import React from 'react'
import './Event.css'

import event_data from '../assets/event_data.js'

export default function Event() {
  return (
    <div className="event">
      <h1>Events</h1>
      {event_data.map((item, i) => {
        return (
          <div className="event-container">
            <img className="event-image" src={item.image} alt="" />

            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button className="event-button">Read more</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
