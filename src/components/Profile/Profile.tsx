import * as React from 'react';
import s from './Profile.module.css'
import {ProfilePageType} from '../../redux/type';
import {MyPostContainer} from './MyPost/MyPostContainer';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import ProfileInfo from './ProfileInfo/ProfileInfo';


type ProfilePropsType = {
  profile: any
  posts: any
}

const Profile = (props: ProfilePropsType) => {
  // const profilePage = useSelector<AppRootStateType, ProfilePageType>(state => state.profileReducer)
  // const posts = profilePage.posts

  return (
    <div className={s.Profile}>
      <ProfileInfo profile={props.profile}/>
      <MyPostContainer profile={props.profile} posts={props.posts}/>
    </div>
  );
}

export default Profile;