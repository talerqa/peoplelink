import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';
import {postData} from '../../index';

type ProfilePropsType = {
  posts: Array<postData>
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.Profile}>
      <MyPost posts={props.posts}/>
    </div>
  );
}

export default Profile;