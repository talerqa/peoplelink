import {setAppErrorAC, SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from '../app/appReducer';
import {Dispatch} from 'redux';

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch<SetAppErrorActionType | SetAppStatusActionType>) => {
  dispatch(setAppErrorAC(error.message ? error.message : 'Some error occurred'))
  dispatch(setAppStatusAC('failed'))
  setTimeout(()=>{
    dispatch(setAppErrorAC(null))
  }, 2000)
}