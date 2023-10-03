import * as React from "react";
import { ProfilePageType } from "../../../type";
import { AddPost } from "./AddPost/AddPost";
import Post from "./Post/Post";
import { Preloader } from "../../Preloader/Preloader";
import s from "./MyPosts.module.scss";
import profileLogo from "../../../assets/img/profileLogo.png";

type MyPostProps = {
  profilePost: ProfilePageType;
  addPost: (title: string) => void;
  deletePost: (id: string) => void;
  profileInfo: any;
  incLike: (id: string, likeCount: number) => void;
  decLike: (id: string, likeCount: number) => void;
  isOwner: boolean;
};

export const MyPosts = (props: MyPostProps) => {
  if (!props.profileInfo) {
    return <Preloader />;
  }

  return (
    <div className={s.myPostsBlock}>
      <AddPost
        addPost={props.addPost}
        photo={props.profileInfo.photos}
        isOwner={props.isOwner}
      />
      <div className={s.myPosts}>
        {" "}
        {props.profilePost.posts.map((post, index) => {
          return (
            <div className={s.myPost} key={index}>
              <div className={s.photoAndName}>
                <img
                  className={s.avatar}
                  src={
                    props.profileInfo.photos.large
                      ? props.profileInfo.photos.large
                      : profileLogo
                  }
                  alt={"profileLogo"}
                />
                <span className={s.firstName}>
                  {" "}
                  {props.profileInfo.fullName}{" "}
                </span>
              </div>
              <Post
                key={index}
                message={post.message}
                likesCount={post.likesCount}
                liked={post.liked}
                id={post.id}
                status={props.profilePost.status}
                deletePost={props.deletePost}
                incLike={props.incLike}
                decLike={props.decLike}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
