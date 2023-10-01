import * as React from "react";
import s from "./errorMessage.module.scss";

type Props = {
  error: string | null;
  closeErrorApp: () => void;
};
export const ErrorMessage = (props: Props) => {
  setTimeout(() => {
    props.closeErrorApp();
  }, 2000);

  clearTimeout(
    setTimeout(() => {
      props.closeErrorApp();
    }, 2000),
  );

  return (
    <div className={props.error ? s.modalWrap : s.modalHidden}>
      <span className={s.textError}>{props.error}</span>
      <button onClick={props.closeErrorApp} className={s.btnCloseErrorMessage}>
        <svg
          className={s.btnIcon}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#1C274C"
              strokeWidth="1.5"
            ></circle>
            <path
              d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
              stroke="#1C274C"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  );
};
