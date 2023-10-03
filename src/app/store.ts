import { applyMiddleware, combineReducers, createStore } from "redux";
import { dialogsReducer } from "../components/Dialogs/dialogsReducer";
import { profileReducer } from "../components/Profile/profileReducer";
import { usersReducer } from "../components/Users/usersReducer";
import { authReducer } from "../components/Login/authReducer";
import thunk from "redux-thunk";
import { appReducer } from "./appReducer";

const rootReducer = combineReducers({
  dialogsReducer: dialogsReducer,
  profileReducer: profileReducer,
  usersReducer: usersReducer,
  authReducer: authReducer,
  appReducer: appReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
