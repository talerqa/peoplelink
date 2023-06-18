import {combineReducers, createStore} from 'redux';
import {dialogsReducer} from './dialogsReducer';
import {profileReducer} from './profileReducer';
import {usersReducerAC} from './usersReducerAC';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
  dialogsReducer: dialogsReducer, // можно дублирующее убрать
  profileReducer: profileReducer, //
  usersReducer: usersReducerAC, //
})
// непосредственно создаём store
export const store = createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
