import React, { useContext } from 'react'
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Item = (props) => {
  //   const { product } = props
  const { addToCart } = useContext(ShopContext)
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />{' '}
      </Link>
      <div className="box-shadow"></div>
      <div className="container-item">
        <p className="book-title">{props.name}</p>
        <p className="author-name">{props.author}</p>
        <div className="rating">
          <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
          <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
          <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
          <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
          <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
        </div>
        <div className="item_prices">
          <div className="item_price_new">{props.new_price} kr</div>
          <button
            className="addToCardBtn"
            onClick={() => {
              addToCart(props.id)
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
