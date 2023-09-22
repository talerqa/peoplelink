import {ChangeEvent, useState} from "react";
import s from "./AddPost.module.scss";
import * as React from "react";
import profileLogo from "../../../../img/profileLogo.png";

type Props = {
  addPost: (title: string) => void
  photo: { small: string | null, large: string | null }
}

export const AddPost = (props: Props) => {

  const [title, setTitle] = useState<string>('')
  const [error,setError] = useState<string>('')
  const addPostHandler = (title: string) => {
    setError('')
    if (title.trim() === '') {
      setError('write a post')
    } else {
      props.addPost(title)
      setTitle('')
      setError('')
    }
  }
  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value !== null) {
      setTitle(e.currentTarget.value)
      setError('')
    }
  }

  return (
    <div className={s.addPostBlock}>
      <div className={s.formPost}>

        < img className={s.avatar}
              src={props.photo.large ? props.photo.large : profileLogo}
              alt={'profileLogo'}
        />
        <div>
          <textarea
            className={s.textarea}
            placeholder={'Start a post'}
            value={title}
            onChange={onPostChange}></textarea>
          <p className={s.error}>{error}</p>
        </div>
        <button
          onClick={() => addPostHandler(title)}
          className={s.buttonAddPost}
        ><span>
          Add post
        </span>
        </button>
      </div>

    </div>)
}