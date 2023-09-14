import * as React from 'react';

import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import {ProfileNameAndPhoto} from "./ProfileNameAndPhoto";

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

  const onMainPhotoSelected = (e: any) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]
      props.savePhoto(file)
    }
  }

  return (
    <div className={s.item}>
      <ProfileNameAndPhoto name={props.profile.fullName} photo={props.profile.photos}/>
      {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
    </div>)
}

export default ProfileInfo;
