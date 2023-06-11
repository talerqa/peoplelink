import React, {ChangeEvent, useState} from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsDataType, DialogsPageType, MessageType} from '../../redux/store';
import {sendMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/storeWithRedux';

export const DialogsContainer = () => {
  const [title, setTitle] = useState('')
  const dialogsPage = useSelector<AppRootStateType, DialogsPageType>(state => state.dialogsReducer)

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

  const dialogsElement = dialogsPage.dialogsData
    .map((dialog: DialogsDataType) => <DialogItem name={dialog.name} id={dialog.id}/>)
  const messageElement = dialogsPage.message.map((message: MessageType) => <Message message={message.message}/>)

  const newMessageBody = dialogsPage.newMessageText

  return (<Dialogs
    dialogsElement={dialogsElement}
    messageElement={messageElement}
    changeTextArea={changeTextArea}
    newMessageBody={newMessageBody}
    addPost={addPost}
  />)
}

