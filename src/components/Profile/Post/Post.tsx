import React from 'react';
import avatar from '../../../img/avatar.png';
import style from './Post.module.css'

const Post = (props: any) => {
  console.log(props.message)
  return (
    <div className={style.item}>
      <img className={style.avatar} src={avatar} alt=""/>
      <span>{props.message}</span>
      <div>Like</div>
      <span>{props.countLike}</span>
    </div>
  )
}

export default Post;