import * as React from 'react';
import logo from '../../img/logo.png';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderProps = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}

 const Header = (props: HeaderProps) => {
  return <header className={s.header}>
    <div className={s.header_wrapper}>
      <div className={s.logo}>
        {/*NAVLINK ROUTE Будет для обновления*/}
        <img className={s.logo_img} src={logo} alt="logo"/>
      </div>
      <nav className={s.navMenu}>

        <ul className={s.navItems}>
          <NavLink to={'/login'}>
            {props.isAuth
              ? <li className={s.navItem}>{props.login}</li>
              : <li className={s.navItem}>LOGIN</li>}


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


