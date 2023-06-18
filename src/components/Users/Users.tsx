import * as React from 'react';
import s from './Users.module.css'
import {UsersType} from '../../redux/type';
import User from './User/User';

type UsersComponentPropsType = {
  users: UsersType[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: UsersType[]) => void
}

export const Users = (props: UsersComponentPropsType) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullName: 'Egor',
        followed: true,
        location: {
          country: 'Belarus',
          city: 'Mink',
        }
      },
      {
        id: 2,
        fullName: 'Egor',
        followed: true,
        location: {
          country: 'Belarus',
          city: 'Mink',
        }
      },
      {
        id: 3,
        fullName: 'Egor',
        followed: true,
        location: {
          country: 'Belarus',
          city: 'Mink',
        }
      }])

  }

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

