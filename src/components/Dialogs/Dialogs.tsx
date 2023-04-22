import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {dialogsPageType} from './../../redux/state';

type DialogsPropsType = {
  state: dialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {
  return (<div className={s.dialogs}>
    <div className={s.dialogsItem}>
      {props.state.dialogsData.map((dialog: any) => <DialogItem name={dialog.name} id={dialog.id}/>)}
    </div>
    <div className={s.messages}>
      {props.state.message.map((message: any) => <Message message={message.message}/>)}
    </div>
  </div>)
}

export default Dialogs
