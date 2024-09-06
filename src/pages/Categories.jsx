import React, { useState } from 'react'
import '../pages/css/ShopCategory.css'
import TabButton from '../components/TabButton/TabButton'

function Categories(props) {
  const [selectedCategory, setSelectedCategory] = useState()
  function handleClick(selectedButton) {
    setSelectedCategory(selectedButton)
  }
  return (
    <>
      <img className="shopcategory_banner" src={props.banner} alt="" />
      <menu className="tab-container">
        <TabButton onSelect={() => handleClick('Romance')}>Romance</TabButton>
        <TabButton onSelect={() => handleClick('Fantasy')}>Fantasy</TabButton>
        <TabButton onSelect={() => handleClick('Non-fiction')}>
          Non-fiction
        </TabButton>
        <TabButton onSelect={() => handleClick('Thriller')}>Thriller</TabButton>
      </menu>
      <div className="selected_category">{selectedCategory}</div>
    </>
  )
}

export default Categories
