import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox_navigator">
        <div className="descriptionbox_nav_box">Description</div>
        <div className="descriptionbox_nav_box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox_description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          minus error tempore eos, assumenda cumque corporis quas, quam commodi
          laudantium eum placeat esse ab ducimus facere quos asperiores et
          reprehenderit?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
          distinctio necessitatibus ab fuga, laborum impedit commodi possimus
          recusandae, quo, earum eveniet accusamus assumenda adipisci ea nobis
          ex illum ipsa doloribus.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
