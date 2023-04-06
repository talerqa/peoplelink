import React from 'react';
import s from './Profile.module.css'
import Post from './MyPost/Post/Post';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props: any) => {
  return (
    <div className={s.Profile}>
      <MyPost/>
    </div>
  );
}

export default Profile;