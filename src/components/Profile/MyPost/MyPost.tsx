import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

const MyPost: React.FC = (props: any) => {
  return (
    <div className={s.item}>
      <ProfileInfo/>
      <textarea></textarea>
      <div className={s.posts}>
        <Post message="Hi how are you" likesCount={1}/>
        <Post message="Its my first project" likesCount={2}/>
        <Post message="Its my second project" likesCount={3}/>
      </div>
    </div>
  );
}

export default MyPost;