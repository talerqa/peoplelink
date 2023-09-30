import * as React from 'react';
import s from './LoginInfo.module.scss'

export const LoginInfo = () => {
  return (<div className={s.infoBlock}>
      <div className={s.info}>
        <p className={s.infoText}>Use common test account credentials or get registered
          <a className={s.link}
             href={'https://social-network.samuraijs.com/'}
             target={'_blank'} rel="noreferrer"> here </a></p>
      </div>
      <div className={s.infoAboutData}>
        <p className={s.email}>Email: <span className={s.emailData}>free@samuraijs.com</span>
        </p>
        <p className={s.password}>Password: <span className={s.passwordData}>free</span></p>
      </div>
    </div>
  );
};

