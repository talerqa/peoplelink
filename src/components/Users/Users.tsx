import * as React from 'react';
import s from './Users.module.css'
import {UsersType} from '../../redux/type';
import User from './User/User';
import axios from 'axios';

export type UsersComponentPropsType = {
  users: UsersType[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: UsersType[]) => void
}

export const Users = (props: UsersComponentPropsType) => {

  if (props.users.length === 0) {


    axios.get('https://social-network.samuraijs.com/api/1.0/users', {withCredentials: true})
      .then((res)=>{
        props.setUsers(res.data.items)
      })
    //
    // props.setUsers([
    //   {
    //     id: 1,
    //     fullName: 'Egor',
    //     followed: true,
    //     location: {
    //       country: 'Belarus',
    //       city: 'Mink',
    //     }
    //   },
    //   {
    //     id: 2,
    //     fullName: 'Egor',
    //     followed: true,
    //     location: {
    //       country: 'Belarus',
    //       city: 'Mink',
    //     }
    //   },
    //   {
    //     id: 3,
    //     fullName: 'Egor',
    //     followed: true,
    //     location: {
    //       country: 'Belarus',
    //       city: 'Mink',
    //     }
    //   }])

  }

  console.log(props.users)
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Friends:</p>
      <div className={s.wrapper_item}>
        {props.users.map(user => {
          return (
            <User
              key={user.id}
              user={user}
              follow={props.follow}
              unfollow={props.unfollow}
              setUsers={props.setUsers}
            />
          )
        })}
      </div>

    </div>
  );
};

