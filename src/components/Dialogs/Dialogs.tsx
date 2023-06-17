import * as React from 'react';
import {ChangeEvent} from 'react';
import s from './Dialogs.module.css'

type DialogsPropsType = {
  title: string
  dialogsElement: JSX.Element[]
  messageElement: JSX.Element[]
  changeTextArea: (e: ChangeEvent<HTMLTextAreaElement>) => void
  addPost: () => void
}

const Dialogs = (props: DialogsPropsType) => {
  const {dialogsElement, messageElement, changeTextArea, title, addPost} = props

  return (<div className={s.dialogs}>
    <div className={s.dialogsItem}>
      {dialogsElement}
    </div>
    <div className={s.messages}>
      {messageElement}
    </div>
    <div>
      <textarea onChange={changeTextArea} value={title}
                placeholder={'Enter your message'}></textarea>
      <button onClick={addPost}>Add post</button>
    </div>
  </div>)
}

export default Dialogs
