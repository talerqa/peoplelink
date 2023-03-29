import React from 'react';
import style from './Profile.module.css'
import Post from './Post/Post';
import MyPost from './MyPost/MyPost';


const Profile = (props:any) =>  {
  return (
    <div className={style.Profile}>
      <MyPost/>
      <Post message='Hi how are you' countLike={1}/>
      <Post message='Its my first project'countLike={2}/>
      <Post message='Its my second project' countLike={3}/>
    </div>
  );
}

export default Profile;