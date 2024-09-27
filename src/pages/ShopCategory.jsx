import React, { useContext, useState } from 'react'
import '../pages/css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/Item/Item'

function ShopCategory(props) {
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

  //   const showMoreItems = (event) => {
  //     const scrollPosition = window.scrollY
  //     setVisibleItems((prevVisibleItems) => prevVisibleItems + 4) // Show 3 more items each time
  //     setTimeout(() => {
  //       window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
  //     }, 0)
  //   }

  return (
    <div className="shop_category">
      <img className="shopcategory_banner" src={props.banner} alt="" />

      <div className="search-container">
        <input type="text" placeholder="Search" className="search-bar" />
        <input type="button" value="Ok" className="search-btn" />
      </div>

      <div className="shopcategory_indexSort">
        <p>
          <span>
            Showing {Math.min(visibleItems, totalItems)} of {totalItems} results
          </span>
        </p>
        <div className="shopcategory_sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory_products">
        {all_product.slice(0, visibleItems).map((item, i) => {
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
  )
}

export default ShopCategory
