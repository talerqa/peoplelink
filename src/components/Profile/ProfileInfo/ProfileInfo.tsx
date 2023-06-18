import * as React from 'react';
import profileLogo from '../../../img/profileLogo.png';
import s from './ProfileInfo.module.css';

type ProfileInfoProps = {

}

const ProfileInfo = (props: ProfileInfoProps) => {
  return (
    <div className={s.item}>
      <span className={s.firstName}> Aliksei </span>
      <span className={s.lastName}> Tarelka </span>
      <img className={s.avatar} src={profileLogo} alt={'profileLogo'}/>
    </div>
  )
}

export default ProfileInfo;