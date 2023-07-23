import {authApi} from '../api/api';
import {AnyAction, Dispatch} from 'redux';
import {LoginFormType} from '../components/Login/Login';

const SET_USER_DATA = 'SET-USER-DATA'

const initState: AuthType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
}

export type AuthType = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}

export const authReducer = (state = initState, action: CommonAuthType) => {
  switch (action.type) {
    case (SET_USER_DATA): {
      return {
        ...state,
        ...action.data
      }
    }

    default:
      return state
  }
}


export type CommonAuthType = SetUserDataType
export type SetUserDataType = ReturnType<typeof setUserDataAC>


export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
  type: SET_USER_DATA,
  data: {id, email, login, isAuth}
} as const)


export const authThunkCreator =  (): any => (dispatch: Dispatch) => {
  authApi.getAuthMe()
    .then((res) => {
      if (res.data.resultCode === 0) {
        // let {id, email, login} = res.data.data
        dispatch(setUserDataAC(res.data.data.id, res.data.data.email, res.data.data.login, true))
      }
    })
}

export const loginThunkCreator = (data: any): any => (dispatch: Dispatch) => {
  authApi.login(data)
    .then((res) => {
      console.log(data)
      if (res.data.resultCode === 0) {
        dispatch(authThunkCreator())
      }
    })
}

export const logOutThunkCreator = () => (dispatch: Dispatch<CommonAuthType>) => {
  authApi.logOut()
    .then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
      }
    })
}