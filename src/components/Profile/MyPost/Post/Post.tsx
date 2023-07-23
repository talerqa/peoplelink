import * as React from 'react';
import s from './Post.module.css'
import ProfileInfo from '../../ProfileInfo/ProfileInfo';

type PostPropsType =  {
  message: string
  likesCount: number
  id: string
  profile: any
  status: string
  updateStatus: (status: string) => void
}

const Post = (props: PostPropsType) => {

  return (<div className={s.item}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <div className={s.post}>
        <div>{props.message}</div>
        <div>Like</div>
        <span>{props.likesCount}</span>
      </div>

    </div>
  )
}

export default Post;
