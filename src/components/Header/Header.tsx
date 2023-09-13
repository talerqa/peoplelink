import * as React from 'react';
import logo from '../../img/logo.png';
import s from './Header.module.scss'
import {NavLink} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";

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
      <NavLink className={s.logo} to={`/profile/${props.id}`}>
        <img className={s.logo_img} src={logo} alt="logo"/>
        <p className={s.headerTitle}> Social Network</p>
      </NavLink>
      <Navbar userId={props.id}/>
      <nav className={s.navMenu}>
        <ul className={s.navItems}>
          {!props.isAuth ?
            <>
              <a href='https://social-network.samuraijs.com/' target='_blank' className={s.navLink}>
                Join in
              </a>
              <NavLink to={'/login'} className={s.navLink}> Log in</NavLink>
            </>
            : <>
              <p className={s.logged}>{props.login} logged in</p>
              <NavLink to={'/login'} onClick={props.logout} className={s.navLink}> Log out</NavLink>
            </>
          }
        </ul>
      </nav>
    </div>
  </header>
}

export default Header


