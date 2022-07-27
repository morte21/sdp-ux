import React from 'react';
import Feature from '../../components/features/Feature';
import './features.css';

const featuresData = [
  {
    title: 'For Environment...',
    text: 'For society and the natural environment we will help preserve the global environment and contribute to the prosperity of mankind through our corporate activities.',
  },
  {
    title: 'For Customers...',
    text: 'For customers and users we will create new values through technology, products and services.',
  },
  {
    title: 'For Suppliers...',
    text: 'For suppliers and vendors we will strive for integrated technical development and harmonious mutual prosperity through parts purchase, production contracting and joint development.',
  },
  {
    title: 'For Investors...',
    text: 'For investors and financial institutions we will increase our investment worth and credit through sound management policy and good access to information.',
  },
  {
    title: 'For Competitors...',
    text: 'For competitors and the industry we will strive to build industrial and technical development through technical alliances and competition.',
  },
  {
    title: 'For Employees...',
    text: 'For all of our employees we will help individuals to achieve self-fulfillment through their work and the company.',
  },
];

const Features = () => {
  return (
     <div className="gpt3__features section__padding" id="horenso">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">HORENSO</h1>
        <br />
        <h1 className="gradient__text">Keep Everyone Informed. </h1>
        <h1 className="gradient__text"> Stay in Touch and Follow Up. </h1>
        <h1 className="gradient__text"> & Look Before You Leap.</h1>
      {/* <p>Request Early Access to Get Started</p> */}
    </div>
      <div className="gpt3__features-container">
        <h1 className="gradient__text">Philosophy</h1>
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}



export default Features