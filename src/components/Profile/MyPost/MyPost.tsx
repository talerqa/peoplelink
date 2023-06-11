import React, {ChangeEvent} from 'react';
import s from './MyPost.module.css'
import ProfileInfo from '../ProfileInfo/ProfileInfo';

type MyPostProps = {
  postsElement: JSX.Element []
  title: string
  addPost: () => void
  updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>)=>void
}
const MyPost = (props: MyPostProps) => {
  return (
    <div className={s.item}>
      <ProfileInfo/>
      <div className={s.formPost}>
        <textarea
          className={s.textarea}
          value={props.title}
          onChange={props.updateNewPostText}></textarea>
        <button
          onClick={props.addPost}
          className={s.buttonAddPost}
        >Add post
        </button>
      </div>

      <div className={s.posts}>
        {props.postsElement}
      </div>
    </div>
  );
}

export default MyPost;