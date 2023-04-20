import React from 'react';
import s from './Message.module.css';

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

export default Message