import * as React from 'react';
import preloader from '../img/loader.webp';
import s from './Preloader.module.css'

export const Preloader = () => {
  return (
    <>
      <img src={preloader} className={s.preloader} alt="preloader"/>
    </>
  );
};

export default Preloader;