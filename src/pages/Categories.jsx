import React, { useContext, useState } from 'react'
import '../pages/css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import TabButton from '../components/TabButton/TabButton'
import ShopCategory from './ShopCategory.jsx'
import SelectedCategory from '../components/SelectedCategory.jsx'

function Categories(props) {
  const { all_product } = useContext(ShopContext)
  const [selectedCategory, setSelectedCategory] = useState('Romance')
  function handleClick(selectedButton) {
    setSelectedCategory(selectedButton)
  }
  return (
    <>
      <img className="shopcategory_banner" src={props.banner} alt="" />
      <menu className="tab-container">
        <TabButton onSelect={() => handleClick('Romance')}>Romance</TabButton>
        <TabButton onSelect={() => handleClick('Fantasy')}>Fantasy</TabButton>
        <TabButton onSelect={() => handleClick('Literaly_fiction')}>
          Literary fiction
        </TabButton>
        {/* <TabButton onSelect={() => handleClick('Thriller')}>Thriller</TabButton> */}
      </menu>
      <div className="selected_category">{selectedCategory}</div>
      <SelectedCategory category={selectedCategory} />
    </>
  )
}

export default Categories
