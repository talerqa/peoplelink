import React from 'react';
import s from './Post.module.css'
import ProfileInfo from '../../ProfileInfo/ProfileInfo';


const Post = (props: any) => {

  return (<div className={s.item}>
      <ProfileInfo/>
      <div>{props.message}</div>
      <div>Like</div>
      <span>{props.likesCount}</span>
    </div>
  )
}

export default Post;