import React from 'react';
import style from './Navbar.module.css';

const Navbar: React.FC = (props:any) => {
  return (<div>
    <nav className={style.Navbar}>
      <div>
        <a href={'/profile'}>Profile</a>
      </div>
      <div>
        <a href={'/dialogs'}>Dialogs</a>
      </div>
      <div>
        <a href={'/message'}>Message</a>
      </div>
      <div>
        <a href={'/music'}>Music</a>
      </div>
      <div>
        <a href={'/setting'}>Setting</a>
      </div>
      <div>
        <a href={'/news'}>News</a>
      </div>
    </nav>
  </div>)
}

export default Navbar;
