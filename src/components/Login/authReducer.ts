import {authApi} from '../../api/api';
import {Dispatch} from 'redux';
import {LoginFormType} from './Login';
import {
  SetAppErrorActionType,
  SetAppInitializeActionType,
  setAppInitializedAC,
  setAppStatusAC,
  SetAppStatusActionType
} from '../../app/appReducer';
import {ResultCode} from '../Users/usersReducer';

const SET_USER_DATA = 'SET-USER-DATA'

const initState: AuthType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  error: '',
  getCaptcha: null
}

export type AuthType = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
  error: string
  getCaptcha: string | null
}

export const authReducer = (state = initState, action: CommonAuthType) => {
  switch (action.type) {
    case (SET_USER_DATA): {
      return {
        ...state,
        ...action.data
      }
    }
    case 'SET_ERROR': {
      return {...state, error: action.error}
    }
    case 'GET_CAPTCHA': {
      return {...state, getCaptcha: action.captcha}
    }
    default:
      return state
  }
}

export type CommonAuthType =
  | SetUserDataType
  | SetErrorType
  | GetCaptchaType
  | SetAppErrorActionType
  | SetAppStatusActionType
  | SetAppInitializeActionType

export type SetUserDataType = ReturnType<typeof setUserDataAC>
export type SetErrorType = ReturnType<typeof setErrorAC>
export type GetCaptchaType = ReturnType<typeof getCaptchaAC>


export const setUserDataAC = (id: number | null , email: string | null, login: string | null, isAuth: boolean, captcha: null | string) => ({
  type: SET_USER_DATA,
  data: {id, email, login, isAuth, captcha}
} as const)

export const setErrorAC = (error: string) => ({type: 'SET_ERROR', error} as const)

export const getCaptchaAC = (captcha: string) => ({type: 'GET_CAPTCHA', captcha} as const)

//THUNK

export const authThunkCreator = (): any => async (dispatch: Dispatch<CommonAuthType>) => {
  try {
    dispatch(setAppStatusAC('loading'))
    const res = await authApi.getAuthMe()
    if (res.data.resultCode === ResultCode.OK) {
      dispatch(setUserDataAC(res.data.data.id, res.data.data.email, res.data.data.login, true, ''))
      dispatch(setAppStatusAC('succeeded'))
    } else if (res.data.resultCode === ResultCode.ERROR) {
      dispatch(setAppStatusAC('failed'))
    }

  } catch (e) {

  } finally {
    dispatch(setAppInitializedAC(true))
    dispatch(setAppStatusAC('succeeded'))
  }
}

export const loginThunkCreator = (data: LoginFormType): any => async (dispatch: Dispatch<CommonAuthType>) => {
  dispatch(setAppStatusAC('loading'))

  const res = await authApi.login(data)
  try {
    if (res.data.resultCode === ResultCode.OK) {
      dispatch(setAppStatusAC('succeeded'))
      dispatch(authThunkCreator())
    } else if (res.data.resultCode === ResultCode.ERROR) {
      dispatch(setErrorAC(res.data.messages[0]))
      dispatch(setAppStatusAC('failed'))
    } else if (res.data.resultCode === ResultCode.CAPTCHA) {
      dispatch(setCaptchaThunkCreator())
      dispatch(authThunkCreator())
      dispatch(setErrorAC(res.data.messages[0]))
    }
  } catch (e) {

  }  finally {
    dispatch(setAppInitializedAC(true))
    dispatch(setAppStatusAC('succeeded'))
  }
}

export const logOutThunkCreator = () => async (dispatch: Dispatch<CommonAuthType>) => {
  dispatch(setAppStatusAC('loading'))
  const res = await authApi.logOut()
  try {
    if (res.data.resultCode === ResultCode.OK) {
      dispatch(setUserDataAC(null, null, null, false, null))
      dispatch(getCaptchaAC(''))
      dispatch(setAppStatusAC('succeeded'))
    }
  } catch (e) {

  }
}

export const setCaptchaThunkCreator = (): any => async (dispatch: Dispatch<CommonAuthType>) => {
  dispatch(setAppStatusAC('loading'))
  const res = await authApi.getCaptcha()
  try {
    dispatch(getCaptchaAC(res.data.url))

    dispatch(setAppStatusAC('succeeded'))
  } catch (e) {

  } finally {
    dispatch(setAppInitializedAC(true))
  }
}

