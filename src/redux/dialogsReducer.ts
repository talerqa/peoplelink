import {DialogsPageType, MessageType} from './type';
import {v1} from 'uuid';

const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

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
    case (SEND_MESSAGE) : {
      const newPost: MessageType = {id: v1(), message: action.title}
      return {
        ...state,
        message: [...state.message, newPost]
      }
    }
    case (UPDATE_MESSAGE_TEXT) : {
      return {...state, newMessageText: action.title}
    }
    default:
      return state
  }
}

export type CommonACType = SendMessageACType | UpdateNewMessageTextACType
export type SendMessageACType = ReturnType<typeof sendMessageAC>
export type UpdateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>

export const sendMessageAC = (title: string) => {
  return {type: SEND_MESSAGE, title} as const
  }
export const updateNewMessageTextAC = (title: string) => {
  return {type: UPDATE_MESSAGE_TEXT, title} as const
}













