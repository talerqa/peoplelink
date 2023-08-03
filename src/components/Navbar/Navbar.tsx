import * as React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {MyUsersPageType} from '../../type';

// type NavbarPropsType = {
//   state: MyFrinedPageType
// }

const Navbar = () => {

  const conditionChangeColorLink = (isActive: boolean) => isActive ? s.active + ' ' + s.link : s.link

  return (<div className={s.navbarWrapper}>
      <nav className={s.navbarMenu}>
        <ul className={s.navbarItems}>
          <li className={s.navbarItem}>
            <NavLink className={conditionChangeColorLink} to={'/profile'}>Profile</NavLink>
          </li>
          <li className={s.navbarItem}>
            <NavLink className={conditionChangeColorLink} to={'/dialogs'}>Dialogs</NavLink>
          </li>
          <li className={s.navbarItem}>
            <NavLink className={conditionChangeColorLink} to={'/music'}>Music</NavLink>
          </li>
          <li className={s.navbarItem}>
            <NavLink className={conditionChangeColorLink} to={'/setting'}>Setting</NavLink>
          </li>
          <li className={s.navbarItem}>
            <NavLink className={conditionChangeColorLink} to={'/news'}>News</NavLink>
          </li>
          <li className={s.navbarItem}>
            <NavLink className={conditionChangeColorLink} to={'/users'}>Friends</NavLink>
          </li>
        </ul>


        {/*<div style={{display: 'flex', flexDirection: 'row'}}>*/}
        {/*  {show*/}
        {/*    ? showFriend*/}
        {/*    : <div></div>}*/}
        {/*</div>*/}


      </nav>
    </div>
  )
}

export default Navbar;
