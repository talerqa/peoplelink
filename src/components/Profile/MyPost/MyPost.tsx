import React from 'react';
import avatar from '../../../img/avatar.png';
import s from './MyPost.module.css'

const MyPost: React.FC = (props:any) => {
  return (
    <div className={s.item}>
      <img className={s.avatar} src={avatar} alt="avatar"/>
      <textarea></textarea>
      <button>Add post</button>
    </div>
  );
}

export default MyPost;