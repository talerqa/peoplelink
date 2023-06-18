import * as React from 'react';
import s from './Users.module.css'
import {MyUsersPageType, UsersType} from '../../redux/type';

type UsersComponentPropsType = {
  users: MyUsersPageType
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: UsersType[]) => void
}

export const Users = (props: UsersComponentPropsType) => {

  //Цвет статуса Friend в зависимости от статуса онлайн или оффлайн
  const statusOnline = <p className={s.statusOnline}>Online</p>
  const statusOffline = <p className={s.statusOffline}>Offline</p>

  //мапим друзей
  const friendsElement = props.users.users.map(f => {
    return (<div key={f.id} className={s.friends_item}>
      <div>
        <a href={'#'}>{f.fullName}</a>
        <div>{f.followed ? statusOnline : statusOffline} </div>
        <button>Follow</button>
        <button>UNFOLLOW</button>
      </div>
    </div>)
  })

  return (
    <div className={s.wrapper}>
      <p className={s.title}>Friends:</p>
      <div className={s.wrapper_item}>
      {friendsElement}
      </div>

    </div>
  );
};

