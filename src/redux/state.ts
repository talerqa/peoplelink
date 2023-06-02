import adamovich from './img/adamovich.jpg'
import letov from './img/letov.webp'
import kafka from './img/kafka.jpg'
import chekhov from './img/chekhov.jpg'
import karatkevich from './img/karatkevich.jpg'
import {AddPostACType, profileReducer, UpdateNewPostTextACType} from './profileReducer';
import {SendMessageACType, dialogsReducer, UpdateNewMessageTextACType} from './dialogsReducer';

let rerenderEntireTree = (state: StateType) => {
}

//Типы Post
export type postData = {
  id: number
  message: string
  likesCount: number
}
export type profilePageType = {
  posts: Array<postData>
  newPostText: string
}

//Типы Dialogs
export type dialogsDataType = {
  id: number
  name: string
}
export type messageType = {
  id: number
  message: string
}
export type dialogsPageType = {
  dialogsData: Array<dialogsDataType>
  message: Array<messageType>
  newMessageText: string
}

//Типы Friends
export type friendsType = {
  id: number
  name: string
  lastName: string
  statusOnSite: boolean
  img: string
}
export type myFriendsPageType = {
  friends: friendsType[]
}

//Тип State
export type StateType = {
  profilePage: profilePageType
  dialogsPage: dialogsPageType
  myFriendsPage: myFriendsPageType
  addPost?: any
}

type StoreType = {
  _state: StateType
  getState: () => StateType
  _callSubscriber: () => void
  addPost: (title: string) => void
  subscribe: (observer: (state: StateType) => void) => void
  updateNewPostText: (newPostText: string) => void
  addMessage: (title: string) => void
  updateMessageText: (title: string) => void
  dispatch: (action: AddPostACType | UpdateNewPostTextACType | SendMessageACType | UpdateNewMessageTextACType) => void
}

//////////////////////////////
// const ADD_POST = 'ADD-POST';
// const UPDATE_NEWPOST_TEXT = 'UPDATE-NEWPOST-TEXT';
// const SEND_MESSGAE = 'ADD-MESSAGE';
// const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
//
// export const addPostAC = (title: string) => ({type: ADD_POST, title} as const)
// export const updateNewPostTextAC = (title: string) => ({
//   type: UPDATE_NEWPOST_TEXT, title
// } as const)
// export const sendMessageAC = (title: string) => ({type: SEND_MESSGAE, title} as const)
// export const updateNewMessageTextAC = (title: string) => {
//   return {type: UPDATE_MESSAGE_TEXT, title} as const
// }

export const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi how are you', likesCount: 7},
        {id: 2, message: 'It\'s my first project', likesCount: 4},
        {id: 3, message: 'Its my second project', likesCount: 1},
      ],
      newPostText: '',
    },
    dialogsPage: {
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
    },
    myFriendsPage: {
      friends: [
        {id: 1, name: 'Egor', lastName: 'Letov', statusOnSite: true, img: letov,},
        {id: 2, name: 'Anton', lastName: 'Chekhov', statusOnSite: false, img: chekhov,},
        {id: 3, name: 'Ales\'', lastName: 'Adamovich', statusOnSite: true, img: adamovich,},
        {id: 4, name: 'Yladzimir', lastName: 'Karatkevich', statusOnSite: true, img: karatkevich,},
        {id: 5, name: 'Franz', lastName: 'Kafka', statusOnSite: false, img: kafka,},
      ]
    }
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
  },
  subscribe(observer) {
    rerenderEntireTree = observer
  },
  addPost(title) {
    const newPost: postData = {id: 5, message: title, likesCount: 0};
    this._state.profilePage.posts.push(newPost);
    rerenderEntireTree(this._state)
  },
  updateNewPostText(newPostText) {
    this._state.profilePage.newPostText = newPostText
    rerenderEntireTree(this._state)
  },
  addMessage(title: string) {
    const newPost: messageType = {id: 6, message: title}
    this._state.dialogsPage.message.push(newPost);
    this._state.dialogsPage.newMessageText = '';
    rerenderEntireTree(this._state)
  },
  updateMessageText(title: string) {
    this._state.dialogsPage.newMessageText = title
    rerenderEntireTree(this._state)
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._callSubscriber()
  }
}