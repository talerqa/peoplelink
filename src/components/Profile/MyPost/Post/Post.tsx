import React from 'react';
import s from './Post.module.css'
import ProfileInfo from '../../ProfileInfo/ProfileInfo';

type PostPropsType = {
  likesCount: number,
  message: string,
}

const Post = (props: PostPropsType) => {
  return (<div className={s.item}>
      <ProfileInfo/>
      <span>{props.message}</span>
      <div>Like</div>
      <span>{props.likesCount}</span>
    </div>
  )
}

export default Post;