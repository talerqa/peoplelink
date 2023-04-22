export type postData = {
  id: number
  message: string
  likesCount: number
}

export type dialogsDataType = {
  id: number
  name: string
}

export type messageType = {
  id: number
  message: string
}

export type profilePageType = {
  posts: Array<postData>

}

export type dialogsPageType = {
  dialogsData: Array<dialogsDataType>
  message: Array<messageType>
}

export type stateType = {
  profilePage: profilePageType
  dialogsPage: dialogsPageType
}

export const state: stateType = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi how are you', likesCount: 7},
      {id: 2, message: 'It\'s my first project', likesCount: 4},
      {id: 3, message: 'Its my second project', likesCount: 1},
    ]
  },
  dialogsPage: {
    message: [
      {id: 1, message: 'Hello'},
      {id: 2, message: 'Whatsup'},
      {id: 3, message: 'Hi everyone'},
      {id: 4, message: 'Yo'},
      {id: 5, message: 'Hello'}],
    dialogsData: [
      {id: 1, name: 'Dimych'},
      {id: 2, name: 'Andrew'},
      {id: 3, name: 'Jon'},
      {id: 4, name: 'Max'},
      {id: 5, name: 'Andrew'},
      {id: 6, name: 'Viktor'}
    ]
  }
}
