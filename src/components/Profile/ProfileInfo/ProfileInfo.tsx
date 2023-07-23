import * as React from 'react';
import profileLogo from '../../../img/profileLogo.png';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import ProfileStatus from './ProfileStatus'


type ProfileInfoProps = {
  profile: any
  status: string
  updateStatus: (status: string) => void
}

const   ProfileInfo = (props: ProfileInfoProps) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div className={s.item}>
      <span className={s.firstName}> {props.profile.fullName} </span>
      <img className={s.avatar} src={props.profile.photos.large ? props.profile.photos.large : profileLogo}
           alt={'profileLogo'}/>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>)
}

export default ProfileInfo;