import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType} from '../../redux/store';
import {
  sendMessageAC,
  SendMessageACType,
  updateNewMessageTextAC,
  UpdateNewMessageTextACType
} from '../../redux/dialogsReducer';

type DialogsPropsType = {
  state: DialogsPageType
  dispatch: (action: SendMessageACType | UpdateNewMessageTextACType) => void
}

const Dialogs = (props: DialogsPropsType) => {
  const [title, setTitle] = useState('')

  //Добавляем новый пост
  const addPost = () => {
    const action = sendMessageAC(title)
    props.dispatch(action)
    setTitle('')
  }

  const changeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget) {
      setTitle(e.currentTarget.value)
      const action = updateNewMessageTextAC(e.currentTarget.value)
      props.dispatch(action)
    }
  }

  const dialogsElement = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
  const messageElement = props.state.message.map((message: any) => <Message message={message.message}/>)
  const newMessageBody = props.state.newMessageText

  return (<div className={s.dialogs}>
    <div className={s.dialogsItem}>
      {dialogsElement}
    </div>
    <div className={s.messages}>
      {messageElement}
    </div>
    <div>
      <textarea onChange={changeTextArea} value={newMessageBody} placeholder={'Enter your message'}></textarea>
      <button onClick={addPost}>Add post</button>
    </div>
  </div>)
}

export default Dialogs
