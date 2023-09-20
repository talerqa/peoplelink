import * as React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';
import {ProfileNameAndPhoto} from "./ProfileNameAndPhoto/ProfileNameAndPhoto";

type ProfileInfoProps = {
  profile: any
  isOwner: boolean
  status: string
  updateStatus: (status: string) => void
  savePhoto: (photo: File) => void
}

const ProfileInfo = (props: ProfileInfoProps) => {

  if (!props.profile) {
    return <Preloader/>
  }


  return (
    <div className={s.profileInfo}>
      <ProfileNameAndPhoto name={props.profile.fullName}
                           photo={props.profile.photos}
                           isOwner={props.isOwner}
                           savePhoto={props.savePhoto}/>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>)
}

export default ProfileInfo;
