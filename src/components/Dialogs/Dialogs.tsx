import React, {useRef} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {dialogsPageType} from './../../redux/state';

type DialogsPropsType = {
  state: dialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {
  ///UseRef = переписать на контролируемый инпут
  const newPostEl = useRef<HTMLTextAreaElement>(null)
  console.log(newPostEl.current)

  //Добавляем новый пост
  const addPost = () => {
    if (newPostEl.current !== null) {
      console.log(newPostEl.current.value)
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
      <textarea ref={newPostEl}></textarea>
      <button onClick={addPost}>Add post</button>
    </div>
  </div>)
}

export default Dialogs
