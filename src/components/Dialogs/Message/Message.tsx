import React, {useRef} from 'react';
import s from './Message.module.css';

type MessageType = {
  message: string
}

const Message: React.FC<MessageType> = (props) => {

  return (
    <div>
    <div className={s.message}>
      {props.message}
    </div>
      <div>

      </div>

    </div>
  )
}

export default Message;