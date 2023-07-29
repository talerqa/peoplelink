import * as React from 'react';
import {LoginForm} from './LoginForm/LoginForm';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {loginThunkCreator} from '../../redux/authReducer';
import {AppRootStateType} from '../../redux/store';
import {Redirect} from 'react-router-dom';
import {LoginInfo} from './LoginInfo/LoginInfo';
import s from './Login.module.css'

export const Login = (props: LoginPropsType) => {
  const onSubmitHandler = (formData: LoginFormType) => {
    props.login(formData)
  }

  if (props.isAuth) {
    return <Redirect to={'/login'}/>
  }

  return (
    <div className={s.loginBlock}>
      <LoginForm onSubmit={onSubmitHandler} error={props.error} captcha={props.getCaptcha}/>
      <LoginInfo/>
    </div>
  );
};

export type LoginPropsType = mapDispatchToPropsType & mapStatePropsType

type mapStatePropsType = {
  isAuth: boolean
  error: string
  getCaptcha: string | null
}

type mapDispatchToPropsType = {
  login: (formData: LoginFormType) => void
}
const mapStateToProps = (state: AppRootStateType): mapStatePropsType => {
  return {
    isAuth: state.authReducer.isAuth,
    error: state.authReducer.error,
    getCaptcha: state.authReducer.getCaptcha,
  }
}

export type LoginFormType = {
  email: string | null
  password: string | null
  rememberMe: boolean
  captcha?: string | null
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    login: (formData: LoginFormType) => {
      dispatch(loginThunkCreator(formData))
    }
  }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);