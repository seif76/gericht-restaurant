import React from 'react';

import './MenuItem.css';

function MenuItem(props) {
  return(
    <div className='MenuItem'>
      <div className='MenuItem-head'>

        <div className='MenuItem-name'>

          <p className='p__cormorant' style={{color:"#DCCA87"}} > {props.title} </p>

        </div>

         <div className='MenuItem-dash' />

        <div className='MenuItem-price'>

         <p className='p__cormorant' > {props.price} </p>

        </div>

      </div>

      <div className='MenuItem-tags'>
         <p className='p__cormorant' style={{color:"#AAA"}} >{props.tags}</p>
      </div>

    </div>
  )
}
export default MenuItem;
