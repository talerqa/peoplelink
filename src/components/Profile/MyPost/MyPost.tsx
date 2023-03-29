import React from 'react';
import avatar from '../../../img/avatar.png';
import style from './MyPost.module.css'

const MyPost: React.FC = (props:any) => {
  return (
    <div className={style.item}>
      <img className={style.avatar} src={avatar} alt="avatar"/>
      <textarea></textarea>
      <button>Add post</button>
    </div>
  );
}

export default MyPost;