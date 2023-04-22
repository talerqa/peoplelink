import React from 'react';
import avatar from '../../../redux/img/avatar.png';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props: any) => {
  return (
    <div className={s.item}>
      <img className={s.avatar} src={avatar} alt=""/>
    </div>
  )
}

export default ProfileInfo;