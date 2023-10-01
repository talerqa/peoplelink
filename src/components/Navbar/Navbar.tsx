import * as React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import {SvgSelectors} from "../common/SvGSelectors/SvgSelectors";

const Navbar = () => {
  const conditionChangeColorLink = (isActive: boolean) => isActive ? s.active + ' ' + s.link : s.link
  return (
    <nav className={s.navbarMenu}>
      <ul className={s.navbarItems}>
        <li className={s.navbarItem}>
          <NavLink className={conditionChangeColorLink} to={`/profile/`}>
            <SvgSelectors svgImage={'PROFILE'}/>
            <span className={s.linkText}>Profile</span>
          </NavLink>
        </li>
        <li className={s.navbarItem}>
          <NavLink className={conditionChangeColorLink} to={'/users'}>
            <SvgSelectors svgImage={'USERS'}/>
            <span className={s.linkText}>Users</span>
          </NavLink>
        </li>
        <li className={s.navbarItem}>
          <NavLink className={conditionChangeColorLink} to={'/dialogs'}>
            <SvgSelectors svgImage={'DIALOGS'}/>
            <span className={s.linkText}>Messages</span>
          </NavLink>
        </li>
        <li className={s.navbarItem}>
          <NavLink className={conditionChangeColorLink} to={'/music'}>
            <SvgSelectors svgImage={'MUSIC'}/>
            <span className={s.linkText}>Music</span>
          </NavLink>
        </li>
        <li className={s.navbarItem}>
          <NavLink className={conditionChangeColorLink} to={'/setting'}>
            <SvgSelectors svgImage={'SETTINGS'}/>
            <span className={s.linkText}>Settings</span>
          </NavLink>
        </li>
        <li className={s.navbarItem}>
          <NavLink className={conditionChangeColorLink} to={'/news'}>
            <SvgSelectors svgImage={'NEWS'}/>
            <span className={s.linkText}>News</span>
          </NavLink>
        </li>

      </ul>
    </nav>




  )
}

export default Navbar;
