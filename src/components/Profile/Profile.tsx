import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';

export type postDataProps = {
  id: number
  message: string
  likesCount: number
}


const Profile = (props: any) => {
  const posts: Array<postDataProps> = [
    {id: 1, message: 'Hi how are you', likesCount: 7},
    {id: 2, message: 'It\'s my first project', likesCount: 4},
    {id: 3, message: 'Its my second project', likesCount: 1},
  ]

  return (
    <div className={s.Profile}>
      <MyPost posts={posts}/>
    </div>
  );
}

export default Profile;