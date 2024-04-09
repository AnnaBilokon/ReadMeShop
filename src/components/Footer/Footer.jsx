import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_3.png'
import instagram_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={footer_logo} alt="" />
      </div>
      <ul className="footer_links">
        <li>Home</li>
        <li>Delivery</li>
        <li>Shops</li>
        <li>About us</li>
        <li>Contacts</li>
      </ul>
      <div className="footer_social_icon">
        <div className="footer_icons_container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer_icons_container">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer_icons_container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer_copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
