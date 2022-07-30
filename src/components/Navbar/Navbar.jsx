import React, { useState } from 'react';

import {GiHamburgerMenu} from "react-icons/gi" ;
import {MdOutlineRestaurantMenu} from "react-icons/md";

import images from "../../constants/images";

import './Navbar.css';

function Navbar (){
  const [toggleSmallScreenMenu, settoggleSmallScreenMenu] = useState(false);


 return(
   <nav className='navbar'>

    <div className='navbar-logo'>

      <img src={images.gericht} />

    </div>

    <ul className='navbar-ul'>
      
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#menu">Menu</a></li>
      <li className='p__opensans'><a href="#awards">Awards</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>

    </ul>
    <div className='navbar-login'>
      <a href="#login" className='p__opensans'>Log In / Register</a>
      <div className='navbar-last-item-line'></div>
      <a href="/" className='p__opensans'>Book Table</a>
    </div>


    {/* coding the small screen navbar */}
    
    <div className='navbar-smallScreen'>
      <GiHamburgerMenu style={{cursor: "pointer"}} color='white' fontSize={27} onClick={() => settoggleSmallScreenMenu(true)} />
        

       {toggleSmallScreenMenu && (  
       
       <div className='navbar-smallScreen-overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu  fontSize={27} className="overlay-close" onClick={() => settoggleSmallScreenMenu(false)} />
        
        <ul className='navbar-smallScreen-ul'>
      
          <li className='p__opensans'><a href="#home" onClick={() => settoggleSmallScreenMenu(false)}>Home</a></li>
          <li className='p__opensans'><a href="#about" onClick={() => settoggleSmallScreenMenu(false)}>About</a></li>
          <li className='p__opensans'><a href="#menu" onClick={() => settoggleSmallScreenMenu(false)}>Menu</a></li>
          <li className='p__opensans'><a href="#awards" onClick={() => settoggleSmallScreenMenu(false)}>Awards</a></li>
          <li className='p__opensans'><a href="#contact" onClick={() => settoggleSmallScreenMenu(false)}>Contact</a></li>

        </ul>
      </div>
      )} 
    

     
    </div>

  </nav>
  )
}

export default Navbar;

