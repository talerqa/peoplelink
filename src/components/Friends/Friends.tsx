import React from 'react';
import s from './Friends.module.css'
import {MyFrinedPageType} from '../../redux/store';

type FriendPropsType = {
  state: MyFrinedPageType
}

const Friends = (props: FriendPropsType) => {
  //Цвет статуса Friend в зависимости от статуса онлайн или оффлайн
  const statusOnline = <p className={s.statusOnline}>Online</p>
  const statusOffline = <p className={s.statusOffline}>Offline</p>

  //мапим друзей
  const friendsElement = props.state.friends.map(f => {
    return (<div key={f.id} className={s.friends_item}>
      <img className={s.avatarFriends} src={f.img} alt="avatar"/>
      <div>
        <a href="#">{f.name + " " + f.lastName}</a>
        <div>{f.statusOnSite ? statusOnline : statusOffline} </div>
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

export default Friends;