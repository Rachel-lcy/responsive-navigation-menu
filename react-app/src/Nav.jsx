import  { useState } from 'react';
import hamburger from './assets/menu-add-line (1).png';
import logo from './assets/reformation-logo.svg';
import search from './assets/search-line.svg';
import shoppingBag from './assets/shopping-bag-line.svg';
import heart from './assets/heart-2-line.png';
import downArrow from './assets/arrow-down-s-line.png';
import closeIcon from './assets/close-line.png';


function Nav(){

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = ()=> {
      setMenuOpen(!menuOpen);
      console.log("Menu state:", !menuOpen);
    }
    

    // const menuLists = menuOpen ? "nav-lists show" : "nav-lists";


  return(
    <nav className='nav-header'>
      <div className='hamburger-layout'>
        <div className='hamburger_logo' >
          <img
          src={hamburger} alt=""
          className='hamburger'
          id='hamburger-menu'
          aria-hidden="true"
          onClick={toggleMenu}/>
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

      <div>
          <ul className={`nav-lists ${menuOpen ? "show" : ""}`} >
            <li>
                <a href="#" className='dropdown-btn' id='nav-item'>New</a>
                <div className='dropdown-content'>
                  <div>
                    <a href="">All New</a>
                    <a href="">New This Week</a>
                    <a href="">The Collection</a>
                    <a href="">Jewelry</a>
                  </div>
                  <div>
                    <a href="" >New Dresses</a>
                    <a href="" >New Tops</a>
                    <a href="" >New Denim</a>
                    <a href="" >New Sweaters</a>
                    <a href="" >New Outwear</a>
                    <a href="" >New Shoes</a>
                    <a href="" >New Bags</a>
                  </div>
                  <div>
                    <a href="" >Picked For You</a>
                    <a href="" >The Winter Edit</a>
                    <a href="" >Party Time</a>
                    <a href="" >Romance Yourself</a>
                  </div>
                </div>
            </li>
            <li><a href="#" className='dropdown-btn' id='nav-item'>Clothing</a></li>
            <li><a href="#" className='dropdown-btn' id='nav-item'>Dresses</a></li>
            <li><a href="#" className='dropdown-btn' id='nav-item'>Tops</a></li>
            <li><a href="#" className='dropdown-btn' id='nav-item'>Jeans</a></li>
            <li><a href="#" className='dropdown-btn' id='nav-item'>Sweaters</a></li>
            <li><a href="#" className='dropdown-btn' id='nav-item'>Weddings</a></li>
            <li><a href="#" className='dropdown-btn' id='nav-item'>Shoes</a></li>
            <li><a href="#" className='dropdown-btn' id='nav-item'>Bags</a></li>
            <li><a href="#" className='dropdown-btn' id='nav-item'>Workwear</a></li>
            <li><a href="#" className='dropdown-btn' id='nav-item'>Edits</a></li>
        </ul>
      </div>

      <div className={`fullscreen-menu ${menuOpen ? "show" : ""}`}>

        <div className="close-icon" onClick={toggleMenu}>
          <img src={closeIcon} alt="Close" />
        </div>

        <div className='nav_search'>
          <img src={search} alt="" />
          <p>Search</p>
        </div>
        
        <ul className={`extra-menu ${menuOpen ? "show" : ""}`}>
          <li><a href="#">Sign in</a></li>
          <li><a href="#">Shipping to: CA</a></li>
          <li><a href="#">Stores</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Favorites</a></li>
          <li><a href="#">Order lookup</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      
    </nav>
  )
}

export default Nav