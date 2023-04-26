import React, {useRef} from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import {postData} from '../../../redux/state';

type MyPostProps = {
  posts: Array<postData>
}

const MyPost = (props: MyPostProps) => {

  ///UseRef = переписать на контролируемый инпут
  const newPostEl = useRef<HTMLTextAreaElement>(null)
  console.log(newPostEl.current)

  //Добавляем новый пост
  const addPost = () => {
    if (newPostEl.current !== null) {
      console.log(newPostEl.current.value)
    }
  }

  const postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
  return (
    <div className={s.item}>
      <ProfileInfo/>
      <textarea ref={newPostEl}></textarea>
      <button onClick={addPost}>Add post</button>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  );
}

export default MyPost;