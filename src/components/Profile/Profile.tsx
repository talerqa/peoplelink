import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';
import {profilePageType} from '../../redux/state';

type ProfilePropsType = {
  state: profilePageType
  updateNewPostText: (newPostText: string) => void
  addPost: (title: string) => void
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.Profile}>
      <MyPost
        posts={props.state.posts}
        newPostText={props.state.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
}

export default Profile;