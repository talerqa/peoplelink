import React from 'react';
import avatar from '../img/avatar.png';
import style from './Profile.module.css'

function Profile(props: any) {
  return (
    <div className={style.Profile}>
      Main content
      <div>
        <img className={style.avatar} src={avatar} alt="avatar"/>
      </div>
      <div>
        description
      </div>
      <div>
        My post
        <div>
          New Post
        </div>
        <nav className={style.nav}>
          <div className={style.item}>
            Post 1
          </div>
          <div className={style.item}>
            Post 2
          </div>
          <div className={style.item}>
            Post 3
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Profile;