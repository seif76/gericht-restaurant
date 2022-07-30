import React, { useRef } from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from "../../constants";
import { SubHeading } from "../../components";

import './Gallery.css';

const galleryimages = [ images.gallery01 , images.gallery02 , images.gallery03 , images.gallery04 ];
 

function Gallery(props) {

  const scrollRef = useRef(null);

  function scroll(direction) {
  
    const {current} = scrollRef ; 

    if (direction === "left") {
      current.scrollLeft -= 300 ;
    }else{
      current.scrollLeft += 300 ;
    }
  }



  return(
    <div className='gallery flex__center '>

      <div className='gallery-content'>
       <SubHeading title="Instagram" />
       <h1 className='headtext__cormorant'> photo Gallery </h1>
       <p className='p__opensans' style={{color:"#AAA" , marginTop: "2rem" , marginBottom:"1rem"}}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.</p>
       <button type='button' className='custom__button'>View More</button>
      </div>

      <div className="gallery-images">
     
        <div className="gallery-images-container" ref={scrollRef}>
          {galleryimages.map((image , index ) => (
              <div className='gallery-images-card flex__center' key={index + 5} >
                <img src={image} alt="gallery photo" />
                <BsInstagram className='gallery-instagram-icon' />
              </div>
          ))}
        </div>

        <div className='gallery-images-arrows'>
          <BsArrowLeftShort className='gallery-arrow-icon' onClick={() => scroll("left")} />
          <BsArrowRightShort className='gallery-arrow-icon' onClick={() => scroll("right")} />
        </div>
     
     
      </div>

    </div>
  )
}

export default Gallery;
