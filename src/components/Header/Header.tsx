import React from 'react';
import logo from '../../redux/img/logo.png';
import s from './Header.module.css'

const Header: React.FC = (props:any) => {
  return <header className={s.Header}>
    <img className={s.logo} src={logo} alt="logo"/>
    <span className={s.item} >Header</span>
  </header>
}

export default Header
