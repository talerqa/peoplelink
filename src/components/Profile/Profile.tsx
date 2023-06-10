import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';
import {ProfilePageType} from '../../redux/store';
import {AddPostACType, UpdateNewPostTextACType} from '../../redux/profileReducer';

type ProfilePropsType = {
  state: ProfilePageType
  dispatch: (action: AddPostACType | UpdateNewPostTextACType) => void
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.Profile}>
      <MyPost
        posts={props.state.posts}
        dispatch={props.dispatch}
      />
    </div>
  );
}

export default Profile;