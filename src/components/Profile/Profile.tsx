import React from 'react';
import s from './Profile.module.css'
import Post from './Post/Post';
import MyPost from './MyPost/MyPost';

const Profile = (props: any) => {
  return (
    <div className={s.Profile}>
      <MyPost/>
      <Post message="Hi how are you" likesCount={1}/>
      <Post message="Its my first project" likesCount={2}/>
      <Post message="Its my second project" likesCount={3}/>
    </div>
  );
}

export default Profile;