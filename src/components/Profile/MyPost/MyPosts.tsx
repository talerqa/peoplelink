import * as React from 'react'
import {ProfilePageType} from "../../../type";
import {AddPost} from "./AddPost/AddPost";
import Post from "./Post/Post";
import {ProfileNameAndPhoto} from "../ProfileInfo/ProfileNameAndPhoto";
import {useMemo} from "react";
import Preloader from "../../Preloader/Preloader";

type MyPostProps = {
    profilePost: ProfilePageType,
    addPost: (title: string) => void
    deletePost: (id: string) => void
    profileInfo: any
}

//
// export const MyPostContainer = (props: MyPostProps) => {
//   const {posts} = props
//   const [title, setTitle] = useState<string>('')
//   const dispatch = useDispatch()
//   //Добавляем новый пост
//   const addPost = () => {
//     dispatch(addPostAC(title))
//     setTitle('')
//   }
//
//
//   const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     if (e.currentTarget.value !== null) {
//       let newPost = e.currentTarget.value
//       setTitle(newPost)
//       const action = updateNewPostTextAC(newPost)
//       dispatch(action)
//     }
//   }
//
//   const postsElement = posts.map(post =>
//     <Post
//       key={post.id}
//       message={post.message}
//       likesCount={post.likesCount}
//       id={post.id}
//       profile={props.profile}
//       status={props.status}
//       updateStatus={props.updateStatus}
//     />
//   )
//
//   return (
//     <MyPost
//       postsElement={postsElement}
//       title={title}
//       addPost={addPost}
//       updateNewPostText={onPostChange}
//     />);
// }
//


export const MyPosts = (props: MyPostProps) => {
    if (!props.profileInfo) {
        return <Preloader/>
    }
    return (
        <div>
            <AddPost addPost={props.addPost}/>

            {props.profilePost.posts.map(post => {
                return (<>
                    <ProfileNameAndPhoto name={props.profileInfo.fullName}
                                         photo={props.profileInfo.photos}/>
                    <Post key={post.id} message={post.message} likesCount={post.likesCount} id={post.id}
                          status={props.profilePost.status}/>
                </>)
            })}
        </div>)
}

