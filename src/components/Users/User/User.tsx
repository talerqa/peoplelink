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
  console.log(props.user.id  )
  return (<div key={props.user.id} className={s.friends_item}>
      <NavLink to={'profile/' + props.user.id}>
        <img className={s.profileImg} src={props.user.photos.small != null ? props.user.photos.small : profileLogo}
             alt=""/>
        <span>{props.user.name}</span>
      </NavLink>
      <div>{props.user.followed
        ? <button onClick={onClickUnFollowHandler}>Unfollow</button>
        : <button onClick={onClickFollowHandler}>Follow</button>
      } </div>
    </div>
  );
};

export default User;