import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Item from './Item/Item.jsx'
import dropdown_icon from './assets/dropdown_icon.png'

export default function SelectedCategory({ category }) {
  const { all_product } = useContext(ShopContext)
  const [visibleItems, setVisibleItems] = useState(6)

  const showMoreItems = (event) => {
    const scrollPosition = window.scrollY
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4) // Show 3 more items each time
    setTimeout(() => {
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
    }, 0)
  }

  const filteredProducts = all_product.filter(
    (product) => product.category === category,
  )

  return (
    <>
      <div className="shop_category">
        <div className="shopcategory_indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory_sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory_products">
          {filteredProducts.slice(0, visibleItems).map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                category={item.category}
                description={item.description}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            )
          })}
        </div>
        {visibleItems < all_product.length && (
          <button
            type="button"
            className="shopcategory_loadmore"
            onClick={showMoreItems}
          >
            Show More
          </button>
        )}
      </div>
    </>
  )
}
