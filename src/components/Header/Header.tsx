import React from 'react';
import logo from '../../redux/img/logo.png';
import s from './Header.module.css'

type HeaderProps = {}

const Header: React.FC = (props: HeaderProps) => {
  return <header className={s.header}>
    <div className={s.header_wrapper}>
      <div className={s.logo}>
        {/*NAVLINK ROUTE Будет для обновления*/}
        <img className={s.logo_img} src={logo} alt="logo"/>
      </div>
      <nav className={s.navMenu}>
        <ul className={s.navItems}>
          <li className={s.navItem}>LINK</li>
          <li className={s.navItem}>LINK</li>
          <li className={s.navItem}>LINK</li>
          <li className={s.navItem}>LINK</li>
          <li className={s.navItem}>LINK</li>
        </ul>
      </nav>
    </div>
  </header>
}

export default Header
