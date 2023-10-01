import * as React from 'react';
import {ChangeEvent} from 'react';
import s from './Dialogs.module.scss'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogsDataType, DialogsPageType, MessageType} from '../../type';

type DialogsPropsType = {
  dialogPage: DialogsPageType
  isAuth: boolean
  newMessageText: string
  messages: Array<MessageType>
  addPost: (title: string) => void
  changeTextArea: (title: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

  const state = props.dialogPage
  const dialogsElement = state.dialogsData
    .map((dialog: DialogsDataType) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
  const messageElement = state.message.map((message: MessageType, index) => <Message message={message.message}
                                                                                     key={index}/>)

  const changeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value !== null) {
      let newPost = e.currentTarget.value
      props.changeTextArea(newPost)
    }
  }

  const addPost = () => {
    if(props.newMessageText.trim() !== '')  {
      props.addPost(props.newMessageText)
      props.changeTextArea('')
    }
  }

  return (<div className={s.dialogs}>
    <div className={s.dialogsItem}>
      {dialogsElement}
    </div>
    <div className={s.dialogsBlock}>
      <div className={s.messages}>
        {messageElement}
      </div>
      <div className={s.addMessage}>
      <textarea  className={s.textarea} onChange={changeTextArea} value={props.newMessageText}
                placeholder={'Enter your message'}></textarea>
        <button className={s.addMessageButton} onClick={addPost}>Send message</button>
      </div>
    </div>
  </div>)
}

export default Dialogs
