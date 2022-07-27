import React from 'react';
import { sanace, sanups, sanmotion, sanaceSub, sanupsSub, sanmotionSub } from './import';
import './brand.css';


const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        {/* <img src={sanace} alt="sanace" /> */}
        <img src={sanaceSub} alt="sanaceSub"/>
      </div>
      
    <div>
      <img src={sanupsSub} alt="sanupsSub"/>
    </div>
    <div>
      <img src={sanmotionSub} alt="sanmotionSub"/>
    </div>
  </div>
  )
}



export default Brand