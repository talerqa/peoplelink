import {applyMiddleware, combineReducers, createStore} from 'redux';
import {dialogsReducer} from './dialogsReducer';
import {profileReducer} from './profileReducer';
import {usersReducer} from './usersReducer';
import {authReducer} from './authReducer';
import thunk from 'redux-thunk';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
  dialogsReducer: dialogsReducer, // можно дублирующее убрать
  profileReducer: profileReducer, //
  usersReducer: usersReducer, //
  authReducer: authReducer,
})

// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunk));

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>


// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
