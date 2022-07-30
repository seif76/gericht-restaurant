import React, { useRef } from 'react';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';

import './Intro.css';

function Intro(props) {

  const [playvid, setplayvid] = React.useState(false)
  const vidref = useRef();
  
  function handlevid(params) {
    
    setplayvid(prevalue => !prevalue)
    
    if (playvid) {
      vidref.current.pause();
    }else{
      vidref.current.play();
    }
  }

  return(
    <div className='intro'>
        
       <video
        ref={vidref}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
         <div className="overlay flex__center">
          <div className='circle flex__center'>
            {playvid ?
             <BsPauseFill onClick={handlevid} color="#fff" fontSize={30} />
             : 
             <BsFillPlayFill onClick={handlevid} color="#fff" fontSize={30} />
             }
            
          </div>
      
      </div>

     
    </div>
  )
}

export default Intro;
