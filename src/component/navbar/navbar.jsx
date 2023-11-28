import React from 'react'
import "./navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"

const navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li>Shop</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li></ul>
                <img src={cart_icon}
                 alt="" />
                 <button>login</button>
        </div>
    )
}

export default navbar