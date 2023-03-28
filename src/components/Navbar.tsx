import React from 'react';
import style from './Navbar.module.css';

function Navbar() {
  return (<div>
    <nav className={style.Navbar}>
      <div>
        Profile
      </div>
      <div>
        Message
      </div>
      <div>
        Music
      </div>
      <div>
        Setting
      </div>
      <div>
        News
      </div>
    </nav>
  </div>)
}

export default Navbar;
