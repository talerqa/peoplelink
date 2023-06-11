import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'

type DialogsPropsType = {
  dialogsElement: JSX.Element[]
  messageElement: JSX.Element[]
  changeTextArea: (e: ChangeEvent<HTMLTextAreaElement>) => void
  newMessageBody: string
  addPost: () => void
}

const Dialogs = (props: DialogsPropsType) => {
  const {dialogsElement, messageElement, changeTextArea, newMessageBody, addPost} = props

  return (<div className={s.dialogs}>
    <div className={s.dialogsItem}>
      {dialogsElement}
    </div>
    <div className={s.messages}>
      {messageElement}
    </div>
    <div>
      <textarea onChange={changeTextArea} value={newMessageBody}
                placeholder={'Enter your message'}></textarea>
      <button onClick={addPost}>Add post</button>
    </div>
  </div>)
}

export default Dialogs
