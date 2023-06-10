import React from 'react';
import s from './Dialogs.module.css'
import {DialogsPageType} from '../../redux/store';
import {SendMessageACType, UpdateNewMessageTextACType} from '../../redux/dialogsReducer';

type DialogsPropsType = {
  state: DialogsPageType
  dispatch: (action: SendMessageACType | UpdateNewMessageTextACType) => void
}

const Dialogs = (props: any) => {
  // const [title, setTitle] = useState('')
  //
  // //Добавляем новый пост
  // const addPost = () => {
  //   const action = sendMessageAC(title)
  //   props.dispatch(action)
  //   setTitle('')
  // }
  //
  // const changeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   if (e.currentTarget) {
  //     setTitle(e.currentTarget.value)
  //     const action = updateNewMessageTextAC(e.currentTarget.value)
  //     props.dispatch(action)
  //   }
  // }
  //
  // const dialogsElement = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
  // const messageElement = props.state.message.map((message: any) => <Message message={message.message}/>)
  // const newMessageBody = props.state.newMessageText

  return (<div className={s.dialogs}>
    <div className={s.dialogsItem}>
      {props.dialogsElement}
    </div>
    <div className={s.messages}>
      {props.messageElement}
    </div>
    <div>
      <textarea onChange={props.changeTextArea} value={props.newMessageBody} placeholder={'Enter your message'}></textarea>
      <button onClick={props.addPost}>Add post</button>
    </div>
  </div>)
}

export default Dialogs
