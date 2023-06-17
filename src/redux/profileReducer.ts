import {postData, ProfilePageType} from './type';
import {v1} from 'uuid';

const ADD_POST = 'ADD-POST';
const UPDATE_NEWPOST_TEXT = 'UPDATE-NEWPOST-TEXT';

const initState: ProfilePageType = {
  posts: [
    {id: v1(), message: 'Hi how are you', likesCount: 7},
    {id: v1(), message: 'It\'s my first project', likesCount: 4},
    {id: v1(), message: 'Its my second project', likesCount: 1},
  ],
  newPostText: ''
}

export const profileReducer = (state = initState, action: CommonACType) => {
  switch (action.type) {
    case (ADD_POST): {
      const newPost: postData = {id: v1(), message: action.title, likesCount: 0};
      return {
        ...state,
        posts: [...state.posts, newPost]
      }
    }
    case (UPDATE_NEWPOST_TEXT) : {
      return {...state, newPostText: action.title}
    }
    default:
      return state
  }
}

type CommonACType = AddPostACType | UpdateNewPostTextACType
export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>

export const addPostAC = (title: string) => ({type: ADD_POST, title} as const)

export const updateNewPostTextAC = (title: string) => ({
  type: UPDATE_NEWPOST_TEXT, title
} as const)

