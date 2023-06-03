import {messageType} from './state';

const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export const dialogsReducer = (state: any, action: any) => {
  switch (action.type) {
    case (SEND_MESSAGE) : {
      console.log(state)
      const newPost: messageType = {id: 6, message: action.title}
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

export type SendMessageACType = ReturnType<typeof sendMessageAC>

export type UpdateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>

export const sendMessageAC = (title: string) => ({type: SEND_MESSAGE, title} as const)
export const updateNewMessageTextAC = (title: string) => {
  return {type: UPDATE_MESSAGE_TEXT, title} as const
}













