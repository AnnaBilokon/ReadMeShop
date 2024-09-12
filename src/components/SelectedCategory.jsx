import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Item from './Item/Item.jsx'
import dropdown_icon from './assets/dropdown_icon.png'

export default function SelectedCategory({ category }) {
  const { all_product } = useContext(ShopContext)
  const [visibleItems, setVisibleItems] = useState(8)
  const totalItems = all_product.length

  const handleShowMore = (event) => {
    const scrollPosition = window.scrollY
    setVisibleItems((prevVisible) => Math.min(prevVisible + 4, totalItems)) // Increase by 4, but don't exceed total
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
            <span>Showing {Math.min(visibleItems, totalItems)} results</span>
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
        {visibleItems < totalItems && (
          <button
            type="button"
            className="shopcategory_loadmore"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
      </div>
    </>
  )
}
