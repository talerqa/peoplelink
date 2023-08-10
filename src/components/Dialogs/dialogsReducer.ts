import {DialogsPageType, MessageType} from '../../type';
import {v1} from 'uuid';

const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const DELETE_DATA_MESSAGE = 'DELETE-DATA-MESSAGE';
const SET_DATA_MESSAGE = 'SET-DATA-MESSAGE';

const initState: DialogsPageType = {
  message: [
    {id: v1(), message: 'Hello'},
    {id: v1(), message: 'Whatsup'},
    {id: v1(), message: 'Hi everyone'},
    {id: v1(), message: 'Yo'},
    {id: v1(), message: 'Hello'}],
  newMessageText: '',
  dialogsData: [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Jon'},
    {id: 4, name: 'Max'},
    {id: 5, name: 'Andrew'},
    {id: 6, name: 'Viktor'}
  ]
}

export const dialogsReducer = (state = initState, action: CommonACType) => {
  switch (action.type) {
    case SET_DATA_MESSAGE: {
      return initState
    }

    case SEND_MESSAGE : {
      const newPost: MessageType = {id: v1(), message: action.title}
      return {
        ...state,
        message: [...state.message, newPost]
      }
    }
    case UPDATE_MESSAGE_TEXT : {
      return {...state, newMessageText: action.title}
    }
    case DELETE_DATA_MESSAGE: {
      return {...state, message: [], dialogsData: [], newMessageText: ''}
    }
    default:
      return state
  }
}

export type CommonACType =
  | SendMessageACType
  | UpdateNewMessageTextACType
  | DeleteDataMessageACType
  | SetDataMessageACType

export type SendMessageACType = ReturnType<typeof sendMessageAC>
export type UpdateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>
export type DeleteDataMessageACType = ReturnType<typeof deleteDataMessageAC>
export type SetDataMessageACType = ReturnType<typeof setDataMessageAC>


///Action Creators

export const sendMessageAC = (title: string) => ({type: SEND_MESSAGE, title} as const)

export const updateNewMessageTextAC = (title: string) => ({type: UPDATE_MESSAGE_TEXT, title} as const)

export const setDataMessageAC = () => ({type: SET_DATA_MESSAGE} as const)

export const deleteDataMessageAC = () => ({type: DELETE_DATA_MESSAGE} as const)













