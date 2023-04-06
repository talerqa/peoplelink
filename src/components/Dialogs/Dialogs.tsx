import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogsItemType = {
  name: string
  id: number
}

const DialogsItem: React.FC<DialogsItemType> = (props) => {
  return (<div className={s.dialog}>
    <NavLink to={'/' + props.id}>{props.name}</NavLink>
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

  return (<div className={s.dialogs}>
    <div className={s.dialogsItem}>
      <DialogsItem name={'Andrew'} id={1}/>
      <DialogsItem name={'Jhon'} id={2}/>
      <DialogsItem name={'Max'} id={3}/>
      <DialogsItem name={'Viktor'} id={4}/>
    </div>
    <div className={s.messages}>
      <Message message={'Hello'}/>
      <Message message={'Hello'}/>
      <Message message={'Hello'}/>
      <Message message={'Hello'}/>
    </div>
  </div>)
}

export default Dialogs
