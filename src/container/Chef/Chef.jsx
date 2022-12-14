import React from 'react';

import { images } from "../../constants";
import { SubHeading } from "../../components";

import './Chef.css';

function Chef (props){
  return(
  <div className=' app__bg app__wrapper section__padding' id='awards'>
    
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef image" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant '>What We Believe In</h1>

     <div className="chef-content">

      <div className="chef-content-quote">
        <img src={images.quote} alt="quote" />
        <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit . </p>
       
      </div>

      <p className='p__opensans'>Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>

     </div>

     <div className='chef-content-sign'>
       <p>Kevin Luo</p>
       <p className='p__opensans'>Chef & Founder</p>
       <img src={images.sign} />
     </div>

    </div>
  
  </div>
)}

export default Chef;
