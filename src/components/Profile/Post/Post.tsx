import React from 'react';
import avatar from '../../../img/avatar.png';
import s from './Post.module.css'

type PostPropsType = {
  likesCount: number,
  message: string,
}

const Post = (props: PostPropsType) => {
  console.log(props.message);
  return (
    <div className={s.item}>
      <img className={s.avatar} src={avatar} alt=""/>
      <span>{props.message}</span>
      <div>Like</div>
      <span>{props.likesCount}</span>
    </div>
  )
}

export default Post;