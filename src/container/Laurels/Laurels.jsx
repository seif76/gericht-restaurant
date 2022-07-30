import React from 'react';

import { images , data } from "../../constants";
import { SubHeading } from "../../components";

import './Laurels.css';

function AwardCard(props) {
  return(
    <div className='awardCard'>
      <img src={props.img}  />
       <div className='awardCard-content'>
        <p className='p__cormorant' style={{ color: '#DCCA87' }} >{props.title}</p>
        <p className='p__cormorant'  >{props.content} </p>
       </div>
    </div>
  )
}


function Laurels(props) {
  return(
    <div className='app__wrapper app__bg section__padding'>
    
       <div className="app__wrapper_info">
          
          <SubHeading title="Awards & Recognition" />
          <h1 className='headtext__cormorant '>Our Laurels</h1>
          
          <div className='laurels-card'>
            {data.awards.map(award => <AwardCard title={award.title} content={award.subtitle} img={award.imgUrl} />)}
          </div>
     
       </div>
      
       <div className="app__wrapper_img">
        <img src={images.laurels} alt="" />
       </div>

    </div>
  )
}
export default Laurels;
