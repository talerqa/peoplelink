import React, {ChangeEvent, useRef, useState} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {dialogsPageType} from './../../redux/state';

type DialogsPropsType = {
  state: dialogsPageType
  addMessage: (title: string) => void
  updateMessageText: (title: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

  //useState
  //const [title, setTitle] = useState('')

  ///UseRef = переписать на контролируемый инпут через useState
  const newPostEl = useRef<HTMLTextAreaElement>(null)


  //Добавляем новый пост
  const addPost = () => {
    if (newPostEl.current !== null) {
      props.addMessage(newPostEl.current.value)
    }
  }

  const changeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget) {
      props.updateMessageText(e.currentTarget.value);
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
      <textarea ref={newPostEl} onChange={changeTextArea} value={props.state.newMessage}></textarea>
      <button onClick={addPost}>Add post</button>
    </div>
  </div>)
}

export default Dialogs
