import React from 'react';
import s from './Profile.module.css'
import {ProfilePageType} from '../../redux/store';
import {MyPostContainer} from './MyPost/MyPostContainer';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/storeWithRedux';


const Profile = () => {
  const profilePage = useSelector<AppRootStateType, ProfilePageType>(state => state.profileReducer)
  return (
    <div className={s.Profile}>
      <MyPostContainer
        posts={profilePage.posts}
      />
    </div>
  );
}

export default Profile;