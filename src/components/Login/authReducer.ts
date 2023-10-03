import { authApi } from "../../api/api";
import { Dispatch } from "redux";
import { LoginFormType } from "./Login";
import {
  SetAppErrorActionType,
  SetAppInitializeActionType,
  setAppInitializedAC,
  setAppStatusAC,
  SetAppStatusActionType,
} from "../../app/appReducer";
import {
  deleteDataUsersAC,
  DeleteDataUsersACType,
  ResultCode,
} from "../Users/usersReducer";
import {
  deleteDataMessageAC,
  DeleteDataMessageACType,
} from "../Dialogs/dialogsReducer";
import {
  DeleteDataProfileACType,
  deleteDataProfileUserAC,
  initStateProfilePage,
  setPostsAC,
  SetPostsProfileACType,
} from "../Profile/profileReducer";
import {
  handleServerAppError,
  handleServerNetworkError,
} from "../../utils/error-utils";

export type InitialStateAuthType = {
  id: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
  error: string;
  getCaptcha: string | null;
};

const initState: InitialStateAuthType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  error: "",
  getCaptcha: null,
};

export const authReducer = (
  state = initState,
  action: CommonAuthType,
): InitialStateAuthType => {
  switch (action.type) {
    case "auth/SET-USER-DATA": {
      return {
        ...state,
        ...action.data,
      };
    }
    case "auth/SET_ERROR": {
      return { ...state, error: action.error };
    }
    case "auth/GET_CAPTCHA": {
      return { ...state, getCaptcha: action.captcha };
    }
    default:
      return state;
  }
};

export type CommonAuthType =
  | SetUserDataType
  | SetErrorType
  | GetCaptchaType
  | SetAppErrorActionType
  | SetAppStatusActionType
  | SetPostsProfileACType
  | SetAppInitializeActionType
  | DeleteDataMessageACType
  | DeleteDataUsersACType
  | DeleteDataProfileACType;

export type SetUserDataType = ReturnType<typeof setUserDataAC>;
export type SetErrorType = ReturnType<typeof setErrorAC>;
export type GetCaptchaType = ReturnType<typeof getCaptchaAC>;

export const setUserDataAC = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
  captcha: null | string,
) =>
  ({
    type: "auth/SET-USER-DATA",
    data: { id, email, login, isAuth, captcha },
  }) as const;
export const setErrorAC = (error: string) =>
  ({ type: "auth/SET_ERROR", error }) as const;
export const getCaptchaAC = (captcha: string) =>
  ({ type: "auth/GET_CAPTCHA", captcha }) as const;

export const authThunkCreator =
  (): any => async (dispatch: Dispatch<CommonAuthType>) => {
    try {
      dispatch(setAppStatusAC("loading"));
      const res = await authApi.getAuthMe();
      if (res.data.resultCode === ResultCode.OK) {
        dispatch(
          setUserDataAC(
            res.data.data.id,
            res.data.data.email,
            res.data.data.login,
            true,
            "",
          ),
        );
        dispatch(setAppStatusAC("succeeded"));
      } else if (res.data.resultCode === ResultCode.ERROR) {
        dispatch(setAppStatusAC("succeeded"));
      } else {
        handleServerAppError(res.data, dispatch);
      }
    } catch (e) {
      const error = e as { message: string };
      handleServerNetworkError(error, dispatch);
    } finally {
      dispatch(setAppInitializedAC(true));
      dispatch(setAppStatusAC("idle"));
    }
  };

export const loginThunkCreator =
  (data: LoginFormType): any =>
  async (dispatch: Dispatch<CommonAuthType>) => {
    dispatch(setAppStatusAC("loading"));
    try {
      const res = await authApi.login(data);
      if (res.data.resultCode === ResultCode.OK) {
        dispatch(setPostsAC(initStateProfilePage.posts));
        dispatch(authThunkCreator());
        dispatch(setErrorAC(""));
        dispatch(setAppStatusAC("succeeded"));
      } else if (res.data.resultCode === ResultCode.ERROR) {
        dispatch(setErrorAC(res.data.messages[0]));
        dispatch(setAppStatusAC("succeeded"));
      } else if (res.data.resultCode === ResultCode.CAPTCHA) {
        dispatch(setCaptchaThunkCreator());
        dispatch(authThunkCreator());
        dispatch(setErrorAC(res.data.messages[0]));
        dispatch(setAppStatusAC("succeeded"));
      } else {
        handleServerAppError(res.data, dispatch);
      }
    } catch (e) {
      const error = e as { message: string };
      handleServerNetworkError(error, dispatch);
    } finally {
      dispatch(setAppInitializedAC(true));
      dispatch(setAppStatusAC("idle"));
    }
  };

export const logOutThunkCreator =
  () => async (dispatch: Dispatch<CommonAuthType>) => {
    dispatch(setAppStatusAC("loading"));
    try {
      const res = await authApi.logOut();
      if (res.data.resultCode === ResultCode.OK) {
        dispatch(setUserDataAC(null, null, null, false, null));
        dispatch(getCaptchaAC(""));
        dispatch(deleteDataMessageAC());
        dispatch(deleteDataUsersAC());
        dispatch(deleteDataProfileUserAC());
        dispatch(setAppStatusAC("succeeded"));
      } else {
        handleServerAppError(res.data, dispatch);
      }
    } catch (e) {
      const error = e as { message: string };
      handleServerNetworkError(error, dispatch);
    } finally {
      dispatch(setAppInitializedAC(true));
      dispatch(setAppStatusAC("idle"));
    }
  };

export const setCaptchaThunkCreator =
  (): any => async (dispatch: Dispatch<CommonAuthType>) => {
    dispatch(setAppStatusAC("loading"));
    try {
      const res = await authApi.getCaptcha();
      dispatch(getCaptchaAC(res.data.url));
      dispatch(setAppStatusAC("idle"));
    } catch (e) {
      //Диспатчим ошибку при отсутствии соединения
      const error = e as { message: string };
      handleServerNetworkError(error, dispatch);
    } finally {
      dispatch(setAppInitializedAC(true));
      dispatch(setAppStatusAC("idle"));
    }
  };
