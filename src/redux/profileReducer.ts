import {postData, profilePageType} from './state';

const ADD_POST = 'ADD-POST';
const UPDATE_NEWPOST_TEXT = 'UPDATE-NEWPOST-TEXT';

export const profileReducer = (state: profilePageType, action: any) => {
  switch (action.type) {
    case (ADD_POST): {
      const newPost: postData = {id: 4, message: action.title, likesCount: 0};
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    }
    case (UPDATE_NEWPOST_TEXT) : {
      state.newPostText = action.title
      return state
    }
    default:
      return state
  }
}

export type AddPostACType = ReturnType<typeof addPostAC>

export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>

export const addPostAC = (title: string) => ({type: ADD_POST, title} as const)

export const updateNewPostTextAC = (title: string) => ({
  type: UPDATE_NEWPOST_TEXT, title
} as const)

