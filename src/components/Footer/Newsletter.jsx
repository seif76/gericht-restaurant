import React from 'react';

import './Newsletter.css';

import { SubHeading } from "../../components";


function Newsletter(params) {
  return(
    <div className='newsLetter'>
      <div className='newsLetter-heading '>

        <SubHeading title="Newsletter" />

        <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
        <p className='p__opensans'>And Never Miss Latest Updates!</p>

      </div>

      <div className="newsLetter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter;
