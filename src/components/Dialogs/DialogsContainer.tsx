import * as React from 'react';
import {ChangeEvent, useState} from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsDataType, DialogsPageType, MessageType} from '../../redux/type';
import {sendMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';


export const DialogsContainer = () => {
  const [title, setTitle] = useState('')
  const dialogsPage = useSelector<AppRootStateType, DialogsPageType>(state => state.dialogsReducer)

  const dispatch = useDispatch()
  //Добавляем новый пост
  const addPost = () => {
    let action = sendMessageAC(title)
    dispatch(action)
    setTitle('')
  }

  const changeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value !== null) {
      let newPost = e.currentTarget.value
      setTitle(newPost)
      const action = updateNewMessageTextAC(e.currentTarget.value)
      dispatch(action)
    }
  }

  const dialogsElement = dialogsPage.dialogsData
    .map((dialog: DialogsDataType) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
  const messageElement = dialogsPage.message.map((message: MessageType) => <Message message={message.message}/>)


  return (<Dialogs
    title={title}
    dialogsElement={dialogsElement}
    messageElement={messageElement}
    changeTextArea={changeTextArea}
    addPost={addPost}
  />)
}

