import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo_.png';
import './navbar.css';

//BEM - Block Element Modifier

const Menu = () => (
  <>
          <p><a href="#home">Home</a></p>
          <p><a href="#sdp">Cooling Division</a></p>
          <p><a href="#horenso">HORENSO</a></p>
          <p><a href="#products">Products</a></p>
          <p><a href="#technology">Technology</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container" >
          <Menu />
        </div>
      </div>
    <div className="gpt3__navbar-sign">
        {/* <p>Sign in</p> */}
        <button type="button">Sign in</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <Menu />
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            {/* <p>Sign in</p> */}
            <button type="button">Sign in</button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}



export default Navbar