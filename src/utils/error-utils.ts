import {setAppErrorAC, SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from '../app/appReducer';
import {Dispatch} from 'redux';

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch<SetAppErrorActionType | SetAppStatusActionType>) => {
    dispatch(setAppErrorAC(error.message ? error.message : 'Some error occurred'))
    dispatch(setAppStatusAC('failed'))
    setTimeout(() => {
        dispatch(setAppErrorAC(null))
    }, 2000)
}


export type BaseResponseType<D = {}> = {
    resultCode: number;
    messages: Array<string>;
    fieldsErrors: Array<string>;
    data: D;
};

export const handleServerAppError = <D>(
    data: BaseResponseType<D>,
    dispatch: Dispatch<SetAppErrorActionType | SetAppStatusActionType>,
) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]));
    } else {
        dispatch(setAppErrorAC("Some error occurred"));
    }
    dispatch(setAppStatusAC("failed"));
};