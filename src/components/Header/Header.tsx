import * as React from 'react';
import {useState} from 'react';
import logo from '../../img/logo.png';
import s from './Header.module.scss'
import {NavLink} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import {BurgerNav} from "../Navbar/burgerNav/BurgerNav";

type HeaderProps = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
  logout: () => void
}

const Header = (props: HeaderProps) => {

  const [openBurgerMenu, setOpenBurgerMenu] = useState<boolean>(!false);

  const toggleDrawer = (value: boolean) => setOpenBurgerMenu(value)

  return <header className={s.header}>
    <div className={s.headerContainer}>
      <NavLink className={s.logo} to={'/profile/'}>
        <img className={s.logo_img} src={logo} alt="logo"/>
        <p className={s.headerTitle}>People Link</p>
      </NavLink>
      {props.isAuth && <>
          <Navbar/>
          <BurgerNav openBurgerMenu={openBurgerMenu}
                     toggleDrawer={toggleDrawer}/>
      </>
      }
      <nav className={s.navMenu}>

        <ul className={s.navItems}>
          {!props.isAuth
            ? <div className={s.navUnLogged}>
              <a href='https://social-network.samuraijs.com/' target='_blank' className={s.navLink} rel="noreferrer">
                Join in
              </a>
              <NavLink to={'/login'} className={s.navLink}> Log in</NavLink>
            </div>
            : <div className={s.navLogged}>
              <p className={s.logged}>{props.login} logged in</p>
              <button className={s.burgerMenu}
                      onClick={() => toggleDrawer(!openBurgerMenu)}
                      onBlur={() => toggleDrawer(!openBurgerMenu)}>
                <a>
                  {!openBurgerMenu
                    ? <svg className={s.svgItem} width="45px" height="45px" viewBox="0 0 24 24" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    : <svg className={s.svgItem} width="45px" height="45px"
                           viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M5 5L19 19M5 19L19 5" stroke="#000000" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"></path>
                      </g>
                    </svg>}
                </a>
              </button>
              <NavLink to={'/login'} onClick={props.logout} className={s.navLink}> Log out</NavLink>
            </div>
          }
        </ul>

      </nav>
    </div>
  </header>
}

export default Header


