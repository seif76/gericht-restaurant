import React from 'react';

import images from "../../constants/images";

import './AboutUs.css';

function AboutUs() {
  return(
    <div className='aboutUs app__bg flex__center section__padding' id='about'>
    
      <div className='aboutUs-overlay flex__center' >
         <img src={images.G} alt="" />
      </div>
    
      <div className='aboutUs-content flex__center'>
       
        <div className='aboutUs-content-about'>

          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="spoon-img" className='spoon__img' />
          <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
           <button type='button' className='custom__button'>Know More</button>
        </div>
      
        <div className='aboutUs-content-knife flex__center'>
          <img src={images.knife} alt="knife" />
        </div>

        <div className='aboutUs-content-history'>

           <h1 className="headtext__cormorant">Our History</h1>
           <img src={images.spoon} alt="spoon-img" className='spoon__img' />
           <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
           <button type='button' className='custom__button'>Know More</button>
         
         </div> 
      
      </div>

    </div>
  )
}

export default AboutUs;
