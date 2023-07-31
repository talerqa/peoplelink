import * as React from 'react';
import s from './LoginInfo.module.scss'

export const LoginInfo = () => {
  return (
    <div className={s.infoBlock}>
      <p className={s.info}>To log in get registered
        <a className={s.link}
           href={'https://social-network.samuraijs.com/'}
           target={'_blank'}> here </a> or use common test account credentials:</p>
      <p className={s.email}>Email: <span className={s.emailData}>free@samuraijs.com</span>
      </p>
      <p className={s.password}>Password: <span className={s.passwordData}>free</span>
      </p>
    </div>
  );
};

