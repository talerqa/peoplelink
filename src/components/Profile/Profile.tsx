import * as React from 'react';
import s from './Profile.module.css'
import {MyPostContainer} from './MyPost/MyPostContainer';
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