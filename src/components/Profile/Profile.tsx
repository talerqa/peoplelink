import * as React from 'react';
import s from './Profile.module.css'

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfileType} from "../../type";


type ProfilePropsType = {
  profile: ProfileType | null
  isOwner: boolean
  posts: any
  status: string
  updateStatus: (status: string) => void
  savePhoto: (photo: File) => void
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.Profile}>
      <ProfileInfo isOwner={props.isOwner}
                   profile={props.profile}
                   status={props.status}
                   updateStatus={props.updateStatus}
                   savePhoto={props.savePhoto}/>
      <MyPostContainer profile={props.profile}/>
    </div>
  );
}

export default Profile;