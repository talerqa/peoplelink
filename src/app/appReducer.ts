import {Dispatch} from 'redux';
import {authThunkCreator} from '../components/Login/authReducer';
import {getUsersThunkCreator} from '../components/Users/usersReducer';

const initialState: InitialStateType = {
  status: 'idle',
  error: null,
  isInitialized: false,
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return {...state, status: action.status}
    case 'APP/SET-ERROR':
      return {...state, error: action.error}
    case 'APP/SET-INITIALIZED':
      return {...state, isInitialized: action.isInitialized}
    default:
      return {...state}
  }
}

export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppInitializedAC = (isInitialized: boolean) => ({type: 'APP/SET-INITIALIZED', isInitialized} as const)

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetAppInitializeActionType = ReturnType<typeof setAppInitializedAC>

type ActionsType =
  | SetAppErrorActionType
  | SetAppStatusActionType
  | SetAppInitializeActionType

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type InitialStateType = {
  status: RequestStatusType
  error: string | null
  isInitialized: boolean
}

export const setInitializedAC = () => ({type: 'APP/SET-INITIALIZED'} as const)

export const initializeApp = (): any => async (dispatch: Dispatch) => {

  await dispatch(authThunkCreator()).then(() => {
    dispatch(setInitializedAC())
  })


}