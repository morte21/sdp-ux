import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai-7.gif';
import './header.css';


const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
          <h1 className="gradient__text">Cooling Division</h1>
          <h1 className="gradient__text">Production</h1>
          <h1 className="gradient__text">Final Assembly</h1>
      <div className="gpt3__header-content__input">
        {/* <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button> */}
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="people"/>
        <p>SYSTEM DEVELOPMENT - QUALITY ASSURANCE 1</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="ai"/>
    </div>
  </div>
  )
}



export default Header