import {DialogsPageType, MessageType} from './store';

const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const initState: DialogsPageType = {
  message: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Whatsup'},
    {id: 3, message: 'Hi everyone'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Hello'}],
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

export const dialogsReducer = (state = initState, action: any) => {
  switch (action.type) {
    case (SEND_MESSAGE) : {
      console.log(state)
      const newPost: MessageType = {id: 6, message: action.title}
      state.message.push(newPost)
      state.newMessageText = ''
      return state
    }
    case (UPDATE_MESSAGE_TEXT) : {
      state.newMessageText = action.title
      return state
    }
    default:
      return state
  }
}

export type CommonACType = SendMessageACType | UpdateNewMessageTextACType
export type SendMessageACType = ReturnType<typeof sendMessageAC>
export type UpdateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>

export const sendMessageAC = (title: string) => ({type: SEND_MESSAGE, title} as const)
export const updateNewMessageTextAC = (title: string) => {
  return {type: UPDATE_MESSAGE_TEXT, title} as const
}













