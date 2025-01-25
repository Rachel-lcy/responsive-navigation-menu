// import React, { useState } from 'react';

import hamburger from './assets/menu-add-line (1).png';
import logo from './assets/reformation-logo.svg';
import search from './assets/search-line.svg';
import shoppingBag from './assets/shopping-bag-line.svg';
import heart from './assets/heart-2-line.png';
import downArrow from './assets/arrow-down-s-line.png'


function Nav(){

  return(
    <nav className='nav-header'>
      <div className='hamburger-layout'>

        <div className='hamburger_logo' >
          <img src={hamburger} alt="" className='hamburger'/>
        </div>

        <div className='left_area'>
          <div className='arrow'>
            <img src={downArrow} alt="" />
            <p>Canada</p>
          </div>
          <p>Our Store</p>
          <p>Sustainability</p>
        </div>

        <img src={logo} alt="" className='logo'/>

        <div className='search_bag'>
          <img src={search} alt="" className='search'/>
          <img src={shoppingBag} alt="" className='bag'/>
        </div>

        <div className='heart_area'>
          <div className='heart'>
            <img src={heart} alt="" />
            <p>Favorites</p>
          </div>
          <a href="#">Sign In</a>
          <div className='bag'>
            <img src={shoppingBag} alt="" />
            <p>Bag</p>
          </div>

        </div>
      </div>

      <div className='nav-div'>
        <ul className='nav-lists'>
          <li>
            <a href="#" className='dropdown-btn'>New</a>
              <div className='dropdown-content'>
                <div>
                  <a href="">All New</a>
                  <a href="">New This Week</a>
                  <a href="">The Collection</a>
                  <a href="">Jewelry</a>
                </div>
                <div>
                  <a href="">New Dresses</a>
                  <a href="">New Tops</a>
                  <a href="">New Denim</a>
                  <a href="">New Sweaters</a>
                  <a href="">New Outwear</a>
                  <a href="">New Shoes</a>
                  <a href="">New Bags</a>
                </div>
                <div>
                  <a href="">Picked For You</a>
                  <a href="">The Winter Edit</a>
                  <a href="">Party Time</a>
                  <a href="">Romance Yourself</a>
                </div>
              </div>
            <a href="#" className='dropdown-btn'>Clothing</a>
            <a href="#" className='dropdown-btn'>Dresses</a>
            <a href="#" className='dropdown-btn'>Tops</a>
            <a href="#" className='dropdown-btn'>Jeans</a>
            <a href="#" className='dropdown-btn'>Sweaters</a>
            <a href="#" className='dropdown-btn'>Weddings</a>
            <a href="#" className='dropdown-btn'>Shoes</a>
            <a href="#" className='dropdown-btn'>Bags</a>
            <a href="#" className='dropdown-btn'>Workwear</a>
            <a href="#" className='dropdown-btn'>Edits</a>
          </li>
        </ul>
        <div className='nav_search'>
          <img src={search} alt="" />
          <p>Search</p>
        </div>
      </div>
    </nav>
  )
}

export default Nav