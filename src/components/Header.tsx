import React from 'react';
import logo from './../img/logo.png';
import './../Header.css';

function Header() {
  return <header className="Header">
    <img src={logo} alt="" className="logo"/>
    Header
  </header>
}

export default Header
