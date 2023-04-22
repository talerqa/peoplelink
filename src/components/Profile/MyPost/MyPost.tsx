import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

const MyPost = (props: any) => {

  const postsElement = props.posts.map((p: any) => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

  return (
    <div className={s.item}>
      <ProfileInfo/>
      <textarea></textarea>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  );
}

export default MyPost;