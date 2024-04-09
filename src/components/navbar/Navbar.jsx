import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../assets/logo_3.png'
import cartIcon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {
  const [menu, setMenu] = useState('bookshop')
  const { getTotalCartItems } = useContext(ShopContext)

  return (
    <div className="navbar">
      <div
        onClick={() => {
          setMenu('logo')
        }}
        className="nav_logo"
      >
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
        {menu === 'logo' ? <hr /> : <></>}
      </div>
      <ul className="nav_menu">
        <li
          onClick={() => {
            setMenu('home')
          }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </Link>
          {menu === 'home' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('romance')
          }}
        >
          <Link
            to="/romance"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Romance
          </Link>
          {menu === 'romance' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('fantasy')
          }}
        >
          <Link
            to="/fantasy"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Fantasy
          </Link>{' '}
          {menu === 'fantasy' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('litFiction')
          }}
        >
          <Link
            to="/litFiction"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Literary Fiction
          </Link>{' '}
          {menu === 'litFiction' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav_login_cart">
        <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
          <button>Login</button>
        </Link>
        <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
          {' '}
          <img src={cartIcon} alt="cart_icon" />{' '}
        </Link>
        <div className="nav_cart_count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
