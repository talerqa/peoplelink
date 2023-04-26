import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemType = {
  name: string
  id: number
}

const DialogItem: React.FC<DialogItemType> = (props) => {
  return (<div className={s.dialog}>
    <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>

  </div>)
}

export default DialogItem
