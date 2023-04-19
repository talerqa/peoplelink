import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogsItemType = {
  name: string
  id: number
}

const DialogsItem: React.FC<DialogsItemType> = (props) => {
  return (<div className={s.dialog}>
    <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
  </div>)
}

type MessageType = {
  message: string
}

const Message: React.FC<MessageType> = (props) => {
  return(
    <div className={s.message}>
      {props.message}
    </div>
  )
}

const Dialogs: React.FC<any> = (props) => {

  let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Jhon'},
    {id: 4, name: 'Max'},
    {id: 5, name: 'Andrew'},
    {id: 6, name: 'Viktor'}]

  const message = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Whatsup'},
    {id: 3, message: 'Hi everyone'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Hello'},]

  return (<div className={s.dialogs}>
    <div className={s.dialogsItem}>
      {dialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)}
    </div>
    <div className={s.messages}>
      {message.map((message => <Message message={message.message}/>))}
    </div>
  </div>)
}

export default Dialogs
