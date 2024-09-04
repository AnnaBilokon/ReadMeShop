import React from 'react'
import './Popular.css'
import data_product from '../assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className="popular">
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-bar" />
        <input type="button" value="Ok" className="search-btn" />
      </div>

      <h1>POPULAR TODAY</h1>
      <hr />
      <div className="popular_item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              author={item.author}
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

export default Popular
