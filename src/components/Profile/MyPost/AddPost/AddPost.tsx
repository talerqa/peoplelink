import {ChangeEvent, useState} from "react";
import s from "../MyPost.module.css";
import * as React from "react";

export const AddPost = (props: any) => {

    const [title, setTitle] = useState<string>('')

    const addPostHandler = (title: string) => {
        props.addPost(title)
        setTitle('')
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value !== null) {
            setTitle(e.currentTarget.value)
        }
    }

    return (
        <div className={s.item}>
            <div className={s.formPost}>
        <textarea
            className={s.textarea}
            value={title}
            onChange={onPostChange}></textarea>
                <button
                    onClick={() => addPostHandler(title)}
                    className={s.buttonAddPost}
                >Add post
                </button>
            </div>
            <div className={s.posts}>
                {props.postsElement}
            </div>
        </div>)
}