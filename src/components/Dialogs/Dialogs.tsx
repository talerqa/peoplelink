import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {dialogsDataType, messageType} from '../../index';

type DialogsPropsType = {
  dialogsData: Array<dialogsDataType>
  message: Array<messageType>
}

const Dialogs = (props: DialogsPropsType) => {
  return (<div className={s.dialogs}>
    <div className={s.dialogsItem}>
      {props.dialogsData.map((dialog: any) => <DialogItem name={dialog.name} id={dialog.id}/>)}
    </div>
    <div className={s.messages}>
      {props.message.map((message: any) => <Message message={message.message}/>)}
    </div>
  </div>)
}

export default Dialogs
