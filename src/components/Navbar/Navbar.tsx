import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar: React.FC = (props:any) => {
  return (
    <nav className={s.navbar}>
      <div>
        <NavLink className={isActive => isActive ? s.active : s.link} to={'/profile'}>Profile</NavLink>
      </div>
      <div>
        <NavLink className={isActive => isActive ? s.active : s.link} to={'/dialogs'}>Dialogs</NavLink>
      </div>
      <div>
        <NavLink className={isActive => isActive ? s.active : s.link} to={'/message'}>Message</NavLink>
      </div>
      <div>
        <NavLink className={isActive => isActive ? s.active : s.link} to={'/music'}>Music</NavLink>
      </div>
      <div>
        <NavLink className={isActive => isActive ? s.active : s.link} to={'/setting'}>Setting</NavLink>
      </div>
      <div>
        <NavLink className={isActive => isActive ? s.active : s.link} to={'/news'}>News</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
