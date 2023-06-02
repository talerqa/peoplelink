import React, {ChangeEvent, useState} from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import {postData} from '../../../redux/state';
import {addPostAC, AddPostACType, updateNewPostTextAC, UpdateNewPostTextACType} from '../../../redux/profileReducer';

type MyPostProps = {
  posts: Array<postData>
  dispatch: (action: AddPostACType | UpdateNewPostTextACType) => void
}

const MyPost = (props: MyPostProps) => {
  console.log(props.dispatch)
  const [title, setTitle] = useState('')
  //Добавляем новый пост
  const addPost = () => {
    let action = addPostAC(title)
    props.dispatch(action)
    setTitle('')
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value !== null) {
      let newPost = e.currentTarget.value
      setTitle(newPost)
      const action = updateNewPostTextAC(newPost)
      props.dispatch(action)
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