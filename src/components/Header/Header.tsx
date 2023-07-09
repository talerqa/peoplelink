import * as React from 'react';
import logo from '../../img/logo.png';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderProps = {
  isAuth: boolean
  login: string | null
}

 const Header = (props: HeaderProps) => {
  console.log(props.isAuth)
  return <header className={s.header}>
    <div className={s.header_wrapper}>
      <div className={s.logo}>
        {/*NAVLINK ROUTE Будет для обновления*/}
        <img className={s.logo_img} src={logo} alt="logo"/>
      </div>
      <nav className={s.navMenu}>
        <ul className={s.navItems}>
          <NavLink to={'/login'}>
            <li className={s.navItem}>LOGIN</li>
          </NavLink>
          <NavLink to={''}>
            <li className={s.navItem}>LINK</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  </header>
}

export default Header


