import React from 'react'
import './NewArrivals.css'
import new_arrivals from '../assets/new_arrivals'
import Item from '../Item/Item'

function NewArrivals() {
  return (
    <div className="new_arrivals">
      <h1>NEW ARRIVALS</h1>
      <hr />
      <div className="arrivals">
        {new_arrivals.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default NewArrivals
