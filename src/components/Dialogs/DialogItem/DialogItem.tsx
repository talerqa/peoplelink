import * as React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';

import profileLogo from './../../../img/profileLogo.png'

type DialogItemType = {
  name: string
  id: number
}

const DialogItem: React.FC<DialogItemType> = (props) => {
  return (<div className={s.dialog}>
    <img className={s.image} src={profileLogo} alt=""/>
    <NavLink to={'/dialogs/' + props.id} className={s.name}>{props.name}</NavLink>
  </div>)
}

export default DialogItem
