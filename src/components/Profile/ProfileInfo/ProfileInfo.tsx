import * as React from 'react';
import profileLogo from '../../../img/profileLogo.png';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader';

type ProfileInfoProps = {
  profile: any
}

const ProfileInfo = (props: ProfileInfoProps) => {

  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div className={s.item}>
      <span className={s.firstName}> Aliksei </span>
      <span className={s.lastName}> Tarelka </span>
      <img className={s.avatar} src={profileLogo} alt={'profileLogo'}/>

  <div>
    <img src={props.profile.photos.large} className={''} alt=""/>

  </div>

    </div>
  )
}

export default ProfileInfo;