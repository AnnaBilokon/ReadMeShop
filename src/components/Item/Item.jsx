import React, { useContext } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Item = (props) => {
  const { product } = props
  const { addToCart } = useContext(ShopContext)
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />{' '}
      </Link>

      <p>{props.name}</p>
      <div className="item_prices">
        <div className="item_price_new">${props.new_price}</div>
      </div>
      <div className="item_price_old">${props.old_price}</div>
      <button
        className="addToCardBtn"
        onClick={() => {
          addToCart(product.id)
        }}
      >
        Add To Cart
      </button>
    </div>
  )
}

export default Item
