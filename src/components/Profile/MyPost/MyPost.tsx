import React, {useRef} from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import {postData} from '../../../redux/state';

type MyPostProps = {
  posts: Array<postData>
  newPostText: string
  addPost: (title: string) => void
  updateNewPostText: (newPostText: string) => void

}

const MyPost = (props: MyPostProps) => {


  ///UseRef = переписать на контролируемый инпут
  const newPostEl = useRef<HTMLTextAreaElement>(null)

  //Добавляем новый пост
  const addPost = () => {
    if (newPostEl.current !== null) {
      if (newPostEl.current.value.length > 0) {
        props.addPost(newPostEl.current.value)

      }
    }
  }

  const onPostChange = () => {
    if (newPostEl.current !== null) {
      let newPost = newPostEl.current.value
      props.updateNewPostText(newPost)
    }

  }

  const postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
  return (
    <div className={s.item}>
      <ProfileInfo/>
      <textarea ref={newPostEl} value={props.newPostText}
                onChange={onPostChange}
      ></textarea>
      <button onClick={addPost}>Add post</button>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  );
}

export default MyPost;