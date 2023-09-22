import * as React from "react";
import error400 from "./400.svg";
import s from './error.module.scss'
export const Error = () => {
  return (
    <div className={s.errorBlock}>
      <img className={s.errorImage} src={error400} alt="" />
    </div>
  );
};
