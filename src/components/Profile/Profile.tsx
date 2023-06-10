import React from 'react';
import s from './Profile.module.css'
import {ProfilePageType} from '../../redux/store';
import {AddPostACType, UpdateNewPostTextACType} from '../../redux/profileReducer';
import {MyPostContainer} from './MyPost/MyPostContainer';

type ProfilePropsType = {
  state: ProfilePageType
  dispatch: (action: AddPostACType | UpdateNewPostTextACType) => void
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.Profile}>
      <MyPostContainer
        posts={props.state.posts}
      />
    </div>
  );
}

export default Profile;