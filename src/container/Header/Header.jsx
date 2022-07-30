import React from 'react';

import images from "../../constants/images"
import SubHeading from "../../components/SubHeading/SubHeading"

import './Header.css';

const Header = () => (
  <div className='header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavor" />
      <h1 className='header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{margin: "2rem 0"}}>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="" />
    </div>
    
  </div>
);

export default Header;
