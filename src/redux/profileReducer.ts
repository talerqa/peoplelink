import {postData, ProfilePageType} from './type';
import {v1} from 'uuid';

const ADD_POST = 'ADD-POST';
const UPDATE_NEWPOST_TEXT = 'UPDATE-NEWPOST-TEXT';
const GET_PROFILE_USERS = 'GET-PROFILE-USERS';

const initState: ProfilePageType = {
  posts: [
    {id: v1(), message: 'Hi how are you', likesCount: 7},
    {id: v1(), message: 'It\'s my first project', likesCount: 4},
    {id: v1(), message: 'Its my second project', likesCount: 1},
  ],
  profile: null,
  newPostText: ''
}

export const profileReducer = (state = initState, action: CommonProfileType) => {
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

    case (GET_PROFILE_USERS): {
      return {...state, profile: action.profile}
    }

    default:
      return state
  }
}

export type CommonProfileType = AddPostACType | UpdateNewPostTextACType | getProfileUserACType
export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export type getProfileUserACType = ReturnType<typeof getProfileUserAC>

export const addPostAC = (title: string) => ({type: ADD_POST, title} as const)

export const updateNewPostTextAC = (title: string) => ({type: UPDATE_NEWPOST_TEXT, title} as const)

export const getProfileUserAC = (profile: any) => ({type: GET_PROFILE_USERS, profile} as const)