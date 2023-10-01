import * as React from 'react';
import s from './BurgerNav.module.scss'

import {NavLink} from "react-router-dom";

type PropsType = {

  openBurgerMenu: boolean
  toggleDrawer: (value: boolean) => void
}

export const BurgerNav = (props: PropsType) => {

  const navLinks = [
    {navTitle: 'Profile', href: '/profile', svgSelector: 'PROFILE'},
    {navTitle: 'User', href: '/users', svgSelector: 'USERS'},
    {navTitle: 'Messages', href: '/dialogs', svgSelector: 'DIALOGS'},
    {navTitle: 'Music', href: '/music', svgSelector: 'MUSIC'},
    {navTitle: 'Settings', href: '/setting', svgSelector: 'SETTINGS'},
    {navTitle: 'News', href: '/news', svgSelector: 'NEWS'},
  ]

  const conditionChangeColorLink = (isActive: boolean) => isActive ? s.active + ' ' + s.link : s.link
  return (<nav className={props.openBurgerMenu ? s.nav + ' ' + s.show : s.nav}>
    {navLinks.map((link, index) => {
      return (<li key={index} className={s.item}>
        <NavLink
          to={`${link.href}`}
          className={conditionChangeColorLink}
          onClick={() => props.toggleDrawer(props.openBurgerMenu)}>
          {link.navTitle}
        </NavLink>
      </li>)
    })}
  </nav>);
};

