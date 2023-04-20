import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {

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
      {dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
    </div>
    <div className={s.messages}>
      {message.map((message => <Message message={message.message}/>))}
    </div>
  </div>)
}

export default Dialogs
