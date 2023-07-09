import * as React from 'react';
import {ChangeEvent, useState} from 'react';
import Post from './Post/Post';
import {postData} from '../../../redux/type';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';
import MyPost from './MyPost';
import {useDispatch} from 'react-redux';

type MyPostProps = {
  profile: any
  posts: Array<postData>
}

export const MyPostContainer = (props: MyPostProps) => {
  const {posts} = props
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

  const postsElement = posts.map(post =>
    <Post
      key={post.id}
      message={post.message}
      likesCount={post.likesCount}
      id={post.id}
      profile={props.profile}
    />
  )

  return (
    <MyPost
      postsElement={postsElement}
      title={title}
      addPost={addPost}
      updateNewPostText={onPostChange}
    />);
}

