import {postData, profilePageType, StateType} from './state';

const ADD_POST = 'ADD-POST';
const UPDATE_NEWPOST_TEXT = 'UPDATE-NEWPOST-TEXT';

export const profileReducer = (state: profilePageType, action: any) => {
  switch (action.type) {
    case (ADD_POST): {
      const newPost: postData = {id: 5, message: action.title, likesCount: 0};
      return state.posts.push(newPost);
    }
    case (UPDATE_NEWPOST_TEXT) : {
      return state.newPostText = action.title
    }
  }
  return state
}

export type AddPostACType = ReturnType<typeof addPostAC>

export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>


export const addPostAC = (title: string) => ({type: ADD_POST, title} as const)
export const updateNewPostTextAC = (title: string) => ({
  type: UPDATE_NEWPOST_TEXT, title
} as const)

