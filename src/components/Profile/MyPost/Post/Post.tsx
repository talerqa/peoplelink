import * as React from 'react';
import s from './Post.module.scss'

type PostPropsType = {
  message: string
  likesCount: number
  id: string
  status: string
  deletePost: (id: string) => void
}

const Post = (props: PostPropsType) => {
  return (<div className={s.post}>

      <p className={s.messagePost}>{props.message}</p>


      <div className={s.likeDeleteBlock}>
        <button
          className={s.buttonDelete}
          onClick={() => {
            props.deletePost(props.id)
            console.log(props.id)
          }}>X
        </button>
        <div className={s.likeBlock}>
          <svg className={s.svgLike} width="196px" height="196px" viewBox="0 0 1024.00 1024.00"
               version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="22">
            <g id="SVGRepo_bgCarrier" stroke-width="1">
            </g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M725.333333 192c-89.6 0-168.533333 44.8-213.333333 115.2C467.2 236.8 388.266667 192 298.666667 192 157.866667 192 42.666667 307.2 42.666667 448c0 253.866667 469.333333 512 469.333333 512s469.333333-256 469.333333-512c0-140.8-115.2-256-256-256z"
                fill="#ff001e"></path>
            </g>
          </svg>
          <div className={s.likeCount}>{props.likesCount}</div>
        </div>
      </div>


    </div>
  )
}

export default Post;
