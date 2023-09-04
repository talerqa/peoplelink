import * as React from 'react';
import s from './Profile.module.css'

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from "./MyPost/MyPostContainer";


type ProfilePropsType = {
  profile: any
  posts: any
  status: string
  updateStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {

  return (
    <div className={s.Profile}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostContainer profile={props.profile}/>
    </div>
  );
}

export default Profile;