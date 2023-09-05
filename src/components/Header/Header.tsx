import * as React from 'react';
import logo from '../../img/logo.png';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderProps = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
  logout: () => void
}

 const Header = (props: HeaderProps) => {
  return <header className={s.header}>
    <div className={s.headerContainer}>
      <div className={s.logo}>
        <img className={s.logo_img} src={logo} alt="logo"/>
      </div>
      <p className={s.headerTitle}> Social Network</p>
      <nav className={s.navMenu}>
        <ul className={s.navItems}>
          <button className={s.navItem}>
            <NavLink to={'/login'}>
              {props.isAuth ? `${props.login} logged in` : 'Log in'}
            </NavLink>
          </button>
          <button className={s.navItem} onClick={props.logout}>
            <NavLink to={'/login'}> Log out</NavLink>
          </button>

        </ul>
      </nav>
    </div>
  </header>
}

export default Header


