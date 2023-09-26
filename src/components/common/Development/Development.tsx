import * as React from 'react';
import s from './development.module.scss'
import devImage from './Development.svg'


export const Development = () => {
  return (
    <div className={s.devBlock}>
      <img className={s.devImage} src={devImage} alt="" />
      <p>The project is under development. Some features may be unavailable.</p>
    </div>
  );
};
