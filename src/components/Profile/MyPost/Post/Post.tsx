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
    return (<div className={s.item}>
            <div className={s.post}>
                <button onClick={() => {
                    props.deletePost(props.id)
                    console.log(props.id)
                }}>X</button>
                <div>{props.message}</div>
                <div>Like</div>
                <span>{props.likesCount}</span>
            </div>
        </div>
  )
}

export default Post;
