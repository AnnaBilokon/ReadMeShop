import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
  const { product } = props
  const { addToCart } = useContext(ShopContext)
  return (
    <div className="product_display">
      <div className="product_display_left">
        <div className="product_display_img">
          <img
            className="product_display_main_img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="product_display_right">
        <h1>{product.name}</h1>
        <div className="product_display_right_stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(46)</p>
        </div>
        <div className="product_display_right_prices">
          <div className="product_display_right_price_old">
            $ {product.old_price}
          </div>
          <div className="product_display_right_price_new">
            $ {product.new_price}
          </div>
        </div>
        <div className="product_display_right_discription">
          {product.description}
        </div>
        <div className="product_display_right_size">
          <h1>Select cover</h1>
          <div className="product_display_right_sizes">
            <div>Hardcover</div>
            <div>Paperback</div>
            <div>Pocket book</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id)
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDisplay
