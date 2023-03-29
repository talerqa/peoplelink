import React from 'react';
import logo from '../../img/logo.png';
import style from './Header.module.css'

const Header: React.FC = (props:any) => {
  return <header className={style.Header}>
    <img className={style.logo} src={logo} alt="logo"/>
    <span className={style.item} >Header</span>
  </header>
}

export default Header
