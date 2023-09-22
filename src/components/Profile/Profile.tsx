import * as React from 'react';
import s from './Profile.module.css'

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfileType, UserType} from "../../type";
import profileLogo from "../../img/profileLogo.png";
import { useHistory} from "react-router-dom";
import {NavUserProfile} from "./NavUserProfile/NavUserProfile";


type ProfilePropsType = {
  profile: ProfileType | null
  isOwner: boolean
  posts: any
  status: string
  updateStatus: (status: string) => void
  savePhoto: (photo: File) => void
  users: UserType[]
}

const Profile = (props: ProfilePropsType) => {



  return <div className={s.profile}>
    <ProfileInfo isOwner={props.isOwner}
                 profile={props.profile}
                 status={props.status}
                 updateStatus={props.updateStatus}
                 savePhoto={props.savePhoto}/>
    <MyPostContainer profile={props.profile}/>

    <NavUserProfile users={props.users}/>


  </div>
}

export default Profile;