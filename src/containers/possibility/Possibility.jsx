import React from 'react';
import possibilityImage from '../../assets/img_top_main_E.png';

import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="products">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="imgcooling" />
    </div>
    <div className="gpt3__possibility-content">
      
      <h1 className="gradient__text">Sanyo Denki Products</h1>
    
      <h4>COOLING SYSTEMS</h4>
      <p><b>We develop, manufacture and sell cooling fans and cooling systems.</b><br />Our fans are used to reduce the effects of heat that is generated inside PC’s, servers, and other electronic devices.</p>
      <h4>POWER SYSTEMS</h4>
      <p><b>We develop, manufacture and sell uninterruptible power systems, engine generators, and solar energy power conditioners.</b><br />We provide power back-up devices to the financial industry in which power stoppages are not an option, and develop power conditioners for solar energy systems.</p>
      <h4>SERVO SYSTEMS</h4>
      <p><b>We develop, manufacture and sell servo motors, stepping motors, encoders/drive units, and control systems.</b><br />The precise movement and stopping abilities of our motors make them ideal for use in medical devices and industrial robots.</p>
      
    </div>
  </div>
);

export default Possibility;