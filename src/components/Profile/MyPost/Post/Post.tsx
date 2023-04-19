import React from 'react';
import s from './Post.module.css'
import ProfileInfo from '../../ProfileInfo/ProfileInfo';

const Post = (props: any) => {
  console.log(props.postData)

  return (<div className={s.item}>
    <ProfileInfo/>
    {props.postData.map((m: any) => {
      return (
        <div>
          <div>{m.message}</div>
          <div>{m.likesCount}</div>
        </div>
      )
    })}

  </div>)
}
  export default Post;