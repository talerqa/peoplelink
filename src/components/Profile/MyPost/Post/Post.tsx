import * as React from 'react';
import s from './Post.module.css'
import {ProfileNameAndPhoto} from "../../ProfileInfo/ProfileNameAndPhoto";

//
// type PostPropsType = {
//   message: string
//   likesCount: number
//   id: string
//   profile: any
//   status: string
//   updateStatus: (status: string) => void
// }

const Post = (props: any) => {

  return (<div className={s.item}>

        <div className={s.post}>
          <button>X</button>
          <div>{props.message}</div>
          <div>Like</div>
          <span>{props.likesCount}</span>
        </div>
      </div>
  )
}

export default Post;
