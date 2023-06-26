//Типы Post
export type postData = {
  id: string
  message: string
  likesCount: number
}
export type ProfilePageType = {
  posts: Array<postData>
  newPostText: string
}

//Типы Dialogs
export type DialogsDataType = {
  id: number
  name: string
}
export type MessageType = {
  id: string
  message: string
}
export type DialogsPageType = {
  dialogsData: Array<DialogsDataType>
  message: Array<MessageType>
  newMessageText: string
}

//Типы User
export type UsersType = {
  id: number
  name: string
  photos: {
    small: null | string
    large: null | string
  },
  status: string,
  followed: boolean
}
export type MyUsersPageType = {
  users: UsersType[]
}

//Тип State
export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  MyFriendPage: MyUsersPageType
  addPost?: any
}

// type StoreType = {
//   _state: StateType
//   getState: () => StateType
//   _callSubscriber: () => void
//   addPost: (title: string) => void
//   subscribe: (observer: (state: StateType) => void) => void
//   updateNewPostText: (newPostText: string) => void
//   addMessage: (title: string) => void
//   updateMessageText: (title: string) => void
//   dispatch: (action: AddPostACType | UpdateNewPostTextACType | SendMessageACType | UpdateNewMessageTextACType) => void
// }

// export const store: StoreType = {
//   _state: {
//     profilePage: {
//       posts: [
//         {id: v1(), message: 'Hi how are you', likesCount: 7},
//         {id: v1(), message: 'It\'s my first project', likesCount: 4},
//         {id: v1(), message: 'Its my second project', likesCount: 1},
//       ],
//
//     },
//     dialogsPage: {
//       message: [
//         {id: 1, message: 'Hello'},
//         {id: 2, message: 'Whatsup'},
//         {id: 3, message: 'Hi everyone'},
//         {id: 4, message: 'Yo'},
//         {id: 5, message: 'Hello'}],
//       newMessageText: '',
//       dialogsData: [
//         {id: 1, name: 'Dimych'},
//         {id: 2, name: 'Andrew'},
//         {id: 3, name: 'Jon'},
//         {id: 4, name: 'Max'},
//         {id: 5, name: 'Andrew'},
//         {id: 6, name: 'Viktor'}
//       ]
//     },
//     MyFriendPage: {
//       friends: [
//         {id: 1, name: 'Egor', lastName: 'Letov', statusOnSite: true, img: letov,},
//         {id: 2, name: 'Anton', lastName: 'Chekhov', statusOnSite: false, img: chekhov,},
//         {id: 3, name: 'Ales\'', lastName: 'Adamovich', statusOnSite: true, img: adamovich,},
//         {id: 4, name: 'Yladzimir', lastName: 'Karatkevich', statusOnSite: true, img: karatkevich,},
//         {id: 5, name: 'Franz', lastName: 'Kafka', statusOnSite: false, img: kafka,},
//       ]
//     }
//   },
//   getState() {
//     return this._state
//   },
//   _callSubscriber() {
//   },
//   subscribe(observer) {
//     rerenderEntireTree = observer
//   },
//   addPost(title) {
//     const newPost: postData = {id: v1(), message: title, likesCount: 0};
//     this._state.profilePage.posts.push(newPost);
//     rerenderEntireTree(this._state)
//   },
//   updateNewPostText(newPostText) {
//     this._state.profilePage.newPostText = newPostText
//     rerenderEntireTree(this._state)
//   },
//   addMessage(title: string) {
//     const newPost: MessageType = {id: 6, message: title}
//     this._state.dialogsPage.message.push(newPost);
//     // this._state.dialogsPage.newMessageText = '';
//     rerenderEntireTree(this._state)
//   },
//   updateMessageText(title: string) {
//     this._state.dialogsPage.newMessageText = title
//     rerenderEntireTree(this._state)
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//     this._callSubscriber()
//   }
// }