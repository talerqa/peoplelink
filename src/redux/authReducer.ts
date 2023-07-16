import {authApi} from '../api/api';
import {Dispatch} from 'redux';

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
        ...action.data,
        isAuth: true
      }
    }

    default:
      return state
  }
}


export type CommonAuthType = SetUserDataType
export type SetUserDataType = ReturnType<typeof setUserDataAC>


export const setUserDataAC = (id: number | null, email: string | null, login: string | null) => ({
  type: SET_USER_DATA,
  data: {id, email, login}
} as const)


export const authThunkCreator = () => (dispatch: Dispatch) => {
  authApi.getAuthMe()
    .then((res) => {
      if (res.data.resultCode === 0) {

        let {id, email, login} = res.data.data
        dispatch(setUserDataAC(id, email, login))
      }
    })
}