import * as React from 'react';
import s from './User.module.scss';
import profileLogo from './../../../img/profileLogo.png'
import {UserType} from '../../../type';
import {NavLink} from 'react-router-dom';

type UserPropsType = {
  user: UserType
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: UserType[]) => void
}

const User = (props: UserPropsType) => {

  const onClickFollowHandler = () => {
    let userId = props.user.id
    props.follow(userId)
  }

  const onClickUnFollowHandler = () => {
    let userId = props.user.id
    props.unfollow(userId)
  }

  return (<div key={props.user.id} className={s.friendsItem}>
      <NavLink to={'profile/' + props.user.id} className={s.link}>
        <img className={s.profileImg} src={props.user.photos.small != null ? props.user.photos.small : profileLogo}
             alt=""/>
        <span>{props.user.name}</span>
      </NavLink>
      <div className={s.buttons}>{props.user.followed
        ? <button className={s.button + ' ' + s.follow} onClick={onClickUnFollowHandler}>Unfollow</button>
        : <button className={s.button + ' ' + s.unfollow} onClick={onClickFollowHandler}>Follow</button>
      } </div>
    </div>
  );
};

export default User;