import * as React from 'react';
import s from './Message.module.scss';
import profileLogo from './../../../img/profileLogo.png'

type MessageType = {
  message: string
}

const Message: React.FC<MessageType> = (props) => {
  return (
    <div className={s.messagesBlock}>
      <img className={s.image} src={profileLogo} alt=""/>
      <div className={s.message}>
        {props.message}</div>
    </div>
  )
}

export default Message;