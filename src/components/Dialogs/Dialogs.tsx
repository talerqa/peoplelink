import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const Dialogs: React.FC = (props:any) => {

  return (<div className={s.dialogs}>
    <div className={s.dialogsItem}>



      <div className={s.active}>Andrew</div>
      <div className={s.dialog}>Alex</div>
      <div className={s.dialog}>John</div>
      <div className={s.dialog}>Max</div>
      <div className={s.dialog}>Petr</div>
    </div>
    <div className={s.messages}>
      <div className={s.message}>
        Hello
      </div>
      <div className={s.message}>
        Hello
      </div>
      <div className={s.message}>
        Hello
      </div>
    </div>
  </div>)
}

export default Dialogs
