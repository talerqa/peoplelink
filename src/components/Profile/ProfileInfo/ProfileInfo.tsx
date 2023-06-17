import * as React from 'react';
import avatar from '../../../img/avatar.png';
import s from './ProfileInfo.module.css';

type ProfileInfoProps = {

}

const ProfileInfo = (props: ProfileInfoProps) => {
  return (
    <div className={s.item}>
      <span className={s.firstName}> Aliksei </span>
      <span className={s.lastName}> Tarelka </span>
      <img className={s.avatar} src={avatar} alt=""/>
    </div>
  )
}

export default ProfileInfo;