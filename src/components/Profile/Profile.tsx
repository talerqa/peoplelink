import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';
import {AddPostType, profilePageType, UpdateNewPostTextType} from '../../redux/state';

type ProfilePropsType = {
  state: profilePageType
  dispatch: (action: AddPostType | UpdateNewPostTextType) => void
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