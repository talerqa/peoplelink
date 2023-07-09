import * as React from 'react';
import s from './User.module.css';
import profileLogo from './../../../img/profileLogo.png'
import {UsersType} from '../../../redux/type';
import {NavLink} from 'react-router-dom';

type UserPropsType = {
  user: UsersType
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: UsersType[]) => void
}

const User = (props: UserPropsType) => {
  const onClickFollowHandler = () => props.follow(props.user.id)
  const onClickUnFollowHandler = () => props.unfollow(props.user.id)
  return (
    <div key={props.user.id} className={s.friends_item}>
      <NavLink to={'profile/' + props.user.id}>
        <img className={s.profileImg} src={props.user.photos.small != null ? props.user.photos.small : profileLogo}
             alt=""/>
      </NavLink>

        <a href={'#'}>{props.user.name}</a>

      <div>{props.user.followed
        ? <button onClick={onClickUnFollowHandler}>Follow</button>
        : <button onClick={onClickFollowHandler}>Unfollow</button>
      } </div>
    </div>
  );
};

export default User;