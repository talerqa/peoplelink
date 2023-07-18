import * as React from 'react';
import {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogsDataType, DialogsPageType, MessageType} from '../../redux/type';
import {AuthType} from '../../redux/authReducer';
import {Redirect} from 'react-router-dom';

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
  const messageElement = state.message.map((message: MessageType) => <Message message={message.message}/>)


  const changeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value !== null) {
      let newPost = e.currentTarget.value
      props.changeTextArea(newPost)
    }
  }

  const addPost = () => {
    props.addPost(props.newMessageText)
    props.changeTextArea('')
  }

   return (<div className={s.dialogs}>
    <div className={s.dialogsItem}>
      {dialogsElement}
    </div>
    <div className={s.messages}>
      {messageElement}
    </div>
    <div>
      <textarea onChange={changeTextArea} value={props.newMessageText}
                placeholder={'Enter your message'}></textarea>
      <button onClick={addPost}>Add post</button>
    </div>
  </div>)
}

export default Dialogs
