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
}

export type AuthType = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
  error: string
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
    default:
      return state
  }
}


export type CommonAuthType = SetUserDataType | ReturnType<typeof setErrorAC>
export type SetUserDataType = ReturnType<typeof setUserDataAC>

export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
  type: SET_USER_DATA,
  data: {id, email, login, isAuth}
} as const)

export const setErrorAC = (error: string) => ({
  type: 'SET_ERROR',
  error
} as const)


export const authThunkCreator = (): any => async (dispatch: Dispatch) => {
  const res = await authApi.getAuthMe()
  try {
    if (res.data.resultCode === 0) {
      dispatch(setUserDataAC(res.data.data.id, res.data.data.email, res.data.data.login, true))
    } else if (res.data.resultCode === 1) {
      dispatch(setErrorAC(res.data.messages[0]))
    }
  } catch (e) {

  }
}

export const loginThunkCreator = (data: LoginFormType): any => async (dispatch: Dispatch) => {

  const res = await authApi.login(data)
  try {
    if (res.data.resultCode === 0) {
      dispatch(authThunkCreator())
    }else if (res.data.resultCode === 1) {
      dispatch(setErrorAC(res.data.messages[0]))
    }
  } catch (e) {

  }
}

export const logOutThunkCreator = () => (dispatch: Dispatch<CommonAuthType>) => {
  authApi.logOut()
    .then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
      }
    })
}