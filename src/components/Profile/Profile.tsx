import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';
import {profilePageType} from '../../redux/state';

type ProfilePropsType = {
  state: profilePageType

}

const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.Profile}>
      <MyPost posts={props.state.posts}/>
    </div>
  );
}

export default Profile;