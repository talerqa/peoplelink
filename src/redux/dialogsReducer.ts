import {messageType} from './state';

const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export const dialogsReducer = (state: any, action: any) => {
  switch (action.type) {
      case (SEND_MESSAGE) : {
        const newPost: messageType = {id: 6, message: action.title}
        state.dialogsPage.message.push(newPost);
        state.dialogsPage.newMessageText = '';
        return;
      }
      case (UPDATE_MESSAGE_TEXT) : {
        state.dialogsPage.newMessageText = action.title
        return;
      }
  }
  return state
}

export type SendMessageACType = ReturnType<typeof sendMessageAC>

export type UpdateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>


export const sendMessageAC = (title: string) => ({type: SEND_MESSAGE, title} as const)
export const updateNewMessageTextAC = (title: string) => {
  return {type: UPDATE_MESSAGE_TEXT, title} as const
}

