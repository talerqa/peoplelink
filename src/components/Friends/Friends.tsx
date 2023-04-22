import React from 'react';
import s from './Friends.module.css'
import {myFriendsPageType} from './../../redux/state';

type FriendPropsType = {
  state: myFriendsPageType
}

const Friends = (props: FriendPropsType) => {

  return (
    <div className={s.wrapper}>
      <p className={s.title}>Friends:</p>
      <div className={s.wrapper_item}>
      {props.state.friends.map(f => {
        return (<div key={f.id} className={s.friends_item}>
          <img className={s.avatarFriends} src={f.img} alt="avatar"/>
          <div>
            <a href="#">{f.name + " " + f.lastName}</a>
            <p>{f.statusOnSite ? 'Online' : 'Offline'} </p>
          </div>
        </div>)
      })}

      </div>
    </div>
  );
};

export default Friends;