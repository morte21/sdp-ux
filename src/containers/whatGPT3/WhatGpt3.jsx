import React from 'react';
import Feature from '../../components/features/Feature';
import './whatGpt3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="sdp">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="SANYO DENKI" text="We at SANYO DENKI Group Companies,
                          aim to help all people achieve happiness,
                          and work with people to make their dreams come true." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      {/* <p>Explore the Library</p> */}
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="SAN ACE" text="“San Ace” is SANYO DENKI’s brand name for cooling systems products, such as cooling fans and cooling fan units." />
      <Feature title="SAN UPS" text="“SANUPS” is SANYO DENKI’s brand name for power supply equipment, including power conditioners for PV inverters, UPSs, inverters, and engine generators." />
      <Feature title="SAN MOTION" text="“SANMOTION” is SANYO DENKI’s brand name for servo systems,such as servo motors, servo amplifiers, stepping motors, stepping drivers." />
    </div>
  </div>
);

export default WhatGPT3;