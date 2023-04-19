import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import ProfileInfo from '../ProfileInfo/ProfileInfo';


type postDataProps = {
  id: number
  message: string
  likesCount: number
}

const MyPost: React.FC = (props: any) => {

  const postData: Array<postDataProps> = [
    {id: 1, message: 'Hi how are you', likesCount: 7},
    {id: 2, message: 'It\'s my first project', likesCount: 4},
    {id: 3, message: 'Its my second project', likesCount: 1},
  ]


  return (
    <div className={s.item}>
      <ProfileInfo/>
      <textarea></textarea>
      <div className={s.posts}>
        <Post postData={postData}/>
      </div>
    </div>
  );
}

export default MyPost;