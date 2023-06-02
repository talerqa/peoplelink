import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
  AddMessageType,
  addMessageAC,
  dialogsPageType,
  updateNewMessageText,
  UpdateNewMessageType
} from './../../redux/state';

type DialogsPropsType = {
  state: dialogsPageType
  dispatch: (action: AddMessageType | UpdateNewMessageType) => void
}

const Dialogs = (props: DialogsPropsType) => {
  const [title, setTitle] = useState('')

  //Добавляем новый пост
  const addPost = () => {
    const action = addMessageAC(title)
    props.dispatch(action)
    setTitle('')
  }

  const changeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget) {
      setTitle(e.currentTarget.value)
      const action = updateNewMessageText(e.currentTarget.value)
      props.dispatch(action)
    }
  }

  return (<div className={s.dialogs}>
    <div className={s.dialogsItem}>
      {props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
    </div>
    <div className={s.messages}>
      {props.state.message.map((message: any) => <Message message={message.message}/>)}
    </div>
    <div>
      <textarea onChange={changeTextArea} value={props.state.newMessage}></textarea>
      <button onClick={addPost}>Add post</button>
    </div>
  </div>)
}

export default Dialogs
