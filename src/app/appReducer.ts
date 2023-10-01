import { Dispatch } from "redux";
import { authThunkCreator } from "../components/Login/authReducer";
import { handleServerNetworkError } from "../utils/error-utils";

const initialState: InitialStateType = {
  status: "idle",
  error: null,
  isInitialized: false,
};

export const appReducer = (
  state: InitialStateType = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    case "app/SET-STATUS":
      return { ...state, status: action.status };
    case "app/SET-ERROR":
      return { ...state, error: action.error };
    case "app/ClOSE_ERROR":
      return { ...state, error: null };
    case "app/SET-INITIALIZED":
      return { ...state, isInitialized: action.isInitialized };
    default:
      return { ...state };
  }
};

export const setAppErrorAC = (error: string | null) =>
  ({ type: "app/SET-ERROR", error }) as const;
export const setAppStatusAC = (status: RequestStatusType) =>
  ({ type: "app/SET-STATUS", status }) as const;
export const setAppInitializedAC = (isInitialized: boolean) =>
  ({ type: "app/SET-INITIALIZED", isInitialized }) as const;
export const closeAppErrorAC = () => ({ type: "app/ClOSE_ERROR" }) as const;

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>;
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>;
export type SetAppInitializeActionType = ReturnType<typeof setAppInitializedAC>;
export type CloseErrorAppActionType = ReturnType<typeof closeAppErrorAC>;

type ActionsType =
  | SetAppErrorActionType
  | SetAppStatusActionType
  | SetAppInitializeActionType
  | CloseErrorAppActionType;

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

export type InitialStateType = {
  status: RequestStatusType;
  error: string | null;
  isInitialized: boolean;
};

export const initializeApp = (): any => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"));
  try {
    await dispatch(authThunkCreator());
    dispatch(setAppInitializedAC(true));
    dispatch(setAppStatusAC("succeeded"));
  } catch (e) {
    const error = e as { message: string };
    handleServerNetworkError(error, dispatch);
  }
};
