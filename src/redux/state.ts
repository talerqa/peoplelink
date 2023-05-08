import adamovich from './img/adamovich.jpg'
import letov from './img/letov.webp'
import kafka from './img/kafka.jpg'
import chekhov from './img/chekhov.jpg'
import karatkevich from './img/karatkevich.jpg'
import {rerenderEntireTree} from '../render';

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
  newMessage: string
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
export type stateType = {
  profilePage: profilePageType
  dialogsPage: dialogsPageType
  myFriendsPage: myFriendsPageType
  addPost?: any
}

export const state: stateType = {
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
    newMessage: '',
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
      {id: 1, name: 'Egor', lastName: 'Letov', statusOnSite: true, img: letov ,},
      {id: 2, name: 'Anton', lastName: 'Chekhov', statusOnSite: false, img: chekhov,},
      {id: 3, name: 'Ales\'', lastName: 'Adamovich', statusOnSite: true, img: adamovich,},
      {id: 4, name: 'Yladzimir', lastName: 'Karatkevich', statusOnSite: true, img: karatkevich,},
      {id: 5, name: 'Franz', lastName: 'Kafka', statusOnSite: false, img: kafka,},
    ]
  }
}

export const addPost = (title: string) => {
  const newPost = {id: 5, message: title, likesCount: 0};
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = '';
  rerenderEntireTree(state)
}

export const updateNewPostText = (newPostText: string) => {
  state.profilePage.newPostText = newPostText
  rerenderEntireTree(state)
}


export const addMessage = (title: string) => {
  const newPost =  {id: 6, message: title}
  state.dialogsPage.message.push(newPost);
  state.dialogsPage.newMessage = '';
  rerenderEntireTree(state)
}
export const updateMessageText = (title: string) => {
  state.dialogsPage.newMessage = title
  console.log(state.dialogsPage.newMessage)
  console.log(state)
  rerenderEntireTree(state)
}
