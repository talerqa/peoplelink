import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { loginThunkCreator } from "./authReducer";
import { AppRootStateType } from "../../app/store";
import { Redirect } from "react-router-dom";
import s from "./Login.module.scss";
import { RequestStatusType } from "../../app/appReducer";
import background from "../../assets/img/backgroundLogin.png";
import { LoginForm } from "./LoginForm/LoginForm";
import { LoginInfo } from "./LoginInfo/LoginInfo";

export const Login = (props: LoginPropsType) => {
  const onSubmitHandler = (formData: LoginFormType) => {
    props.login(formData);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className={s.loginBlock}>
      <div className={s.loginContainer}>
        <div className={s.login}>
          <LoginInfo />
          <LoginForm
            onSubmit={onSubmitHandler}
            error={props.error}
            status={props.status}
            captcha={props.getCaptcha}
          />
        </div>
        <div className={s.background}>
          <img
            src={background}
            alt="backround-image"
            className={s.backgroundImg}
          />
        </div>
      </div>
    </div>
  );
};

export type LoginPropsType = mapDispatchToPropsType & mapStatePropsType;

type mapStatePropsType = {
  isAuth: boolean;
  error: string;
  getCaptcha: string | null;
  status: RequestStatusType;
};

type mapDispatchToPropsType = {
  login: (formData: LoginFormType) => void;
};
const mapStateToProps = (state: AppRootStateType): mapStatePropsType => {
  return {
    isAuth: state.authReducer.isAuth,
    error: state.authReducer.error,
    getCaptcha: state.authReducer.getCaptcha,
    status: state.appReducer.status,
  };
};

export type LoginFormType = {
  email: string | null;
  password: string | null;
  rememberMe: boolean;
  captcha?: string | null;
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    login: (formData: LoginFormType) => {
      dispatch(loginThunkCreator(formData));
    },
  };
};

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
