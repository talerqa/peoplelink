import * as React from 'react';
import s from './User.module.css';
import profileLogo from './../../../img/profileLogo.png'
import {UsersType} from '../../../redux/type';
import {NavLink} from 'react-router-dom';
import {followUserThunkCreator, unFollowUserThunkCreator} from '../../../redux/usersReducer';

type UserPropsType = {
  user: UsersType
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: UsersType[]) => void
}


const User = (props: UserPropsType) => {

  const onClickFollowHandler = () => {
    let userId = props.user.id
    props.follow(userId)
    //dispatch


  }

  const onClickUnFollowHandler = () => {
    let userId = props.user.id
    props.unfollow(userId)
    //dispatch
  }

  return (
    <div key={props.user.id} className={s.friends_item}>
      <NavLink to={'profile/' + props.user.id}>
        <img className={s.profileImg} src={props.user.photos.small != null ? props.user.photos.small : profileLogo}
             alt=""/>
        <a href={'#'}>{props.user.name}</a>
      </NavLink>
      <div>{props.user.followed
        ? <button onClick={onClickUnFollowHandler}>Follow</button>
        : <button onClick={onClickFollowHandler}>Unfollow</button>
      } </div>
    </div>
  );
};

export default User;