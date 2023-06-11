import React, {ChangeEvent, useState} from 'react';
import Post from './Post/Post';
import {postData, ProfilePageType} from '../../../redux/store';
import {addPostAC, AddPostACType, updateNewPostTextAC, UpdateNewPostTextACType} from '../../../redux/profileReducer';
import MyPost from './MyPost';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/storeWithRedux';

type MyPostProps = {
  posts: Array<postData>
}

export const MyPostContainer  = (props: MyPostProps) => {
  const [title, setTitle] = useState<string>('')

  const dispatch = useDispatch()
  //Добавляем новый пост
  const addPost = () => {
    let action = addPostAC(title)
   dispatch(action)
    setTitle('')
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value !== null) {
      let newPost = e.currentTarget.value
      setTitle(newPost)
      const action = updateNewPostTextAC(newPost)
      dispatch(action)
    }
  }

  const postsElement = props.posts.map(p =>
    <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

  return (
    <MyPost
      postsElement={postsElement}
      title={title}
      addPost={addPost}
      updateNewPostText={onPostChange}
    />);
}

