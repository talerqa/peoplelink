import React, {ChangeEvent, useState} from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import {postData} from '../../../redux/state';

type MyPostProps = {
  posts: Array<postData>
  dispatch: any
}

const MyPost = (props: MyPostProps) => {

  const [title, setTitle] = useState('')
  //Добавляем новый пост
  const addPost = () => {
    props.dispatch({type: 'ADD-POST', title})
    setTitle('')
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value !== null) {
      let newPost = e.currentTarget.value
      setTitle(newPost)
      props.dispatch({type: 'UPDATE-NEWPOST-TEXT', newPost})
    }

  }

  const postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
  return (
    <div className={s.item}>
      <ProfileInfo/>
      <div className={s.formPost}>
        <textarea

          className={s.textarea}
          value={title}
          onChange={onPostChange}></textarea>
        <button
          onClick={addPost}
          className={s.buttonAddPost}
        >Add post</button>
      </div>

      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  );
}

export default MyPost;