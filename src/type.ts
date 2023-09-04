//Типы Post
export type postData = {
  id: string
  message: string
  likesCount: number
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
export type UserType = {
  followed: boolean
  id: number
  name: string
  photos: {
    small: null | string
    large: null | string
  }
  status: null | string
  uniqueUrlName: null | string
}

export type MyUsersPageType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}

//Тип State
export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  MyFriendPage: MyUsersPageType
  addPost?: any
}

//Типы Profile

export type ProfilePageType = {
  posts: Array<postData>
  profile: ProfileType | null
  newPostText: string
  status: string
}

export type ProfileType = {
  userId: number
  lookingForAJob: boolean | null
  lookingForAJobDescription: string | null
  fullName: string
  contacts: ContactsProfileType | null
  photos: PhotosProfileType | null
  aboutMe: string | null
}

export type ContactsProfileType = {
  github: string | null
  vk: string | null
  facebook: string | null
  instagram: string | null
  twitter: string | null
  website: string | null
  youtube: string | null
  mainLink: string | null
}

export type PhotosProfileType = {
  small: string | null
  large: string | null
}