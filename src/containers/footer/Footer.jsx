import React from 'react';
import gpt3Logo from '../../assets/logo_.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Join Us.</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Quality Assurance 1 - System Development <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>System Development</p>
        <p>Quality Assurance 1</p>
        <p>sdp-qa1systemdevt@sanyodenki.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      
      <p>Sanyo Denki Philippines &copy; {new Date().getFullYear()}.</p>
      <p>All rights reserved.</p>
    </div>
  </div>
);

export default Footer;