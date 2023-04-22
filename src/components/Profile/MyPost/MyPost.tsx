import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import {postData} from '../../../redux/state';

type MyPostProps = {
  posts: Array<postData>
}

const MyPost = (props: MyPostProps) => {
  const postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
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