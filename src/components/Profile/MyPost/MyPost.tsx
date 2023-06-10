import React from 'react';
import s from './MyPost.module.css'
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import {postData} from '../../../redux/store';
import {AddPostACType, UpdateNewPostTextACType} from '../../../redux/profileReducer';

type MyPostProps = {
  posts: Array<postData>
  dispatch: (action: AddPostACType | UpdateNewPostTextACType) => void
}

const MyPost = (props: any) => {
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