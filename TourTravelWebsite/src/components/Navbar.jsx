import React from 'react'
import "./Navbar.styles.css"
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItem';
import { useState } from 'react';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className='NavbarItems'>
    <h1 className='navbar-logo'>
     Trippy
    </h1>
    <div className="menu-icons" onClick={handleClick}>
      <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
    </div>
    <ul className={clicked ? "nav-menu active" : "nav-menu"}>
      {MenuItems.map((item, index) => {
        return (
          <li key={index} >
            <Link to={item.link} className={item.cName}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        )
      })}
      <button>
        Sign Up
      </button>
    </ul>


    </nav>
  )
}

export default Navbar