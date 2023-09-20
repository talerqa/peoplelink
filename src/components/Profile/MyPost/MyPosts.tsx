import * as React from 'react'
import {ProfilePageType} from "../../../type";
import {AddPost} from "./AddPost/AddPost";
import Post from "./Post/Post";
import {ProfileNameAndPhoto} from "../ProfileInfo/ProfileNameAndPhoto/ProfileNameAndPhoto";
import Preloader from "../../Preloader/Preloader";
import s from './MyPosts.module.css'

type MyPostProps = {
  profilePost: ProfilePageType,
  addPost: (title: string) => void
  deletePost: (id: string) => void
  profileInfo: any
}

export const MyPosts = (props: MyPostProps) => {
  if (!props.profileInfo) {
    return <Preloader/>
  }

  return (
    <div className={s.myPostsBlock}>
      <AddPost addPost={props.addPost}/>
      <div> {props.profilePost.posts.map((post, index) => {
        return (<>
          <ProfileNameAndPhoto
            key={index}
            name={props.profileInfo.fullName}
            photo={props.profileInfo.photos}/>
          <Post key={post.id}
                message={post.message}
                likesCount={post.likesCount}
                id={post.id}
                status={props.profilePost.status}
                deletePost={props.deletePost}/>
        </>)
      })}
      </div>
    </div>)
}

