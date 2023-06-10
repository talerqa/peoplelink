import React, {ChangeEvent, useState} from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType} from '../../redux/store';
import {sendMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {useDispatch} from 'react-redux';

type DialogsPropsType = {
  state: DialogsPageType
}

export const DialogsContainer = (props: DialogsPropsType) => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  //Добавляем новый пост
  const addPost = () => {
    const action = sendMessageAC(title)
    dispatch(action)
    setTitle('')
  }

  const changeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget) {
      setTitle(e.currentTarget.value)
      const action = updateNewMessageTextAC(e.currentTarget.value)
      dispatch(action)
    }
  }

  const dialogsElement = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
  const messageElement = props.state.message.map((message: any) => <Message message={message.message}/>)
  const newMessageBody = props.state.newMessageText

  return (<Dialogs
    dialogsElement={dialogsElement}
    messageElement={messageElement}
    changeTextArea={changeTextArea}
    newMessageBody={newMessageBody}
    addPost={addPost}
  />)
}
