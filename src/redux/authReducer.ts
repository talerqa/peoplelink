import {authApi} from '../api/api';
import {Dispatch} from 'redux';
import {LoginFormType} from '../components/Login/Login';

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


export type CommonAuthType = SetUserDataType | SetErrorType | GetCaptchaType

export type SetUserDataType = ReturnType<typeof setUserDataAC>
export type SetErrorType = ReturnType<typeof setErrorAC>
export type GetCaptchaType = ReturnType<typeof getCaptchaAC>


export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean, captcha: null | string) => ({
  type: SET_USER_DATA,
  data: {id, email, login, isAuth, captcha}
} as const)

export const setErrorAC = (error: string) => ({type: 'SET_ERROR', error} as const)

export const getCaptchaAC = (captcha: string) => ({type: 'GET_CAPTCHA', captcha} as const)

//THUNK

export const authThunkCreator = (): any => async (dispatch: Dispatch<CommonAuthType>) => {
  const res = await authApi.getAuthMe()

  try {
    if (res.data.resultCode === 0) {
      dispatch(setUserDataAC(res.data.data.id, res.data.data.email, res.data.data.login, true, ''))
    } else if (res.data.resultCode === 1) {
      dispatch(setErrorAC(res.data.messages[0]))
    }
  } catch (e) {

  }
}

export const loginThunkCreator = (data: LoginFormType): any => async (dispatch: Dispatch<CommonAuthType>) => {
  const res = await authApi.login(data)

  try {
    if (res.data.resultCode === 0) {
      dispatch(authThunkCreator())
    } else if (res.data.resultCode === 1) {
      console.log('ЕРОР')
      dispatch(setErrorAC(res.data.messages[0]))
    } else if (res.data.resultCode === 10) {
      dispatch(setCaptchaThunkCreator())
      // dispatch(authThunkCreator())
    }
  } catch (e) {
    console.log('ОШИБКА')
  }
}

export const logOutThunkCreator = () => async (dispatch: Dispatch<CommonAuthType>) => {
  const res = await authApi.logOut()
  try {
    if (res.data.resultCode === 0) {
      dispatch(setUserDataAC(null, null, null, false, null))
      dispatch(getCaptchaAC(''))
    }
  } catch (e) {

  }

}

export const setCaptchaThunkCreator = (): any => async (dispatch: Dispatch<CommonAuthType>) => {
  const res = await authApi.getCaptcha()
  try {
    dispatch(getCaptchaAC(res.data.url))
  } catch (e) {

  }
}

