import React from 'react';

import { SubHeading } from "../../components";
import { images } from "../../constants";

function FindUs(props) {
  return(
    <div className='abouUs app__bg flex__center section__padding app__wrapper'>
      
     <div className=' app__wrapper_info'>
         <SubHeading title="Contact" />
         <h1 className='headtext__cormorant' style={{marginBottom:"3rem"}} >Find Us</h1>
     
       <div className='content'>
          <p className='p__opensans' >Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
          <p className='p__cormorant' style={{margin:"2rem 0" , color:"#DCCA87"}} >Opening Hours</p>
          <p className='p__opensans' >Mon - Fri: 10:00 Am - 02:00 Am</p>
          <p className='p__opensans' >Sat - Sun: 10:00 Am - 03:00 Am</p>

          <button type='button' className='custom__button' style={{marginTop:"2rem"}} >Visit Us</button>
          
       </div>
      
     </div>

     <div className='app__wrapper_img '>
        <img src={images.findus}  />
     </div>
            
    </div>
  )
}
export default FindUs;
