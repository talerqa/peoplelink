import * as React from 'react';
import profileLogo from '../../../img/profileLogo.png';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';

type ProfileInfoProps = {
  profile: any
}

const   ProfileInfo = (props: ProfileInfoProps) => {

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={s.item}>
      <span className={s.firstName}> {props.profile.fullName} </span>
      <img className={s.avatar} src={ props.profile.photos.large ? props.profile.photos.large : profileLogo} alt={'profileLogo'}/>



  <div>


  </div>

    </div>
  )
}

export default ProfileInfo;