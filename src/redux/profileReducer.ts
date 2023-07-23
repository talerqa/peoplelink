import {postData, ProfilePageType, ProfileType} from './type';
import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {profileApi} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEWPOST_TEXT = 'UPDATE-NEWPOST-TEXT';
const GET_PROFILE_USERS = 'GET-PROFILE-USERS';
const SET_STATUS = 'SET-STATUS';

const initState: ProfilePageType = {
  posts: [
    {id: v1(), message: 'Hi how are you', likesCount: 7},
    {id: v1(), message: 'It\'s my first project', likesCount: 4},
    {id: v1(), message: 'Its my second project', likesCount: 1},
  ],
  profile: null,
  newPostText: '',
  status: '',
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
    case (SET_STATUS): {

      return {...state, status: action.status}
    }

    default:
      return state
  }
}

export type CommonProfileType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof getProfileUserAC>
  | ReturnType<typeof setStatusProfileUserAC>


export const addPostAC = (title: string) => ({type: ADD_POST, title} as const)

export const updateNewPostTextAC = (title: string) => ({type: UPDATE_NEWPOST_TEXT, title} as const)

export const getProfileUserAC = (profile: ProfileType) => ({type: GET_PROFILE_USERS, profile} as const)

export const setStatusProfileUserAC = (status: string) => ({type: SET_STATUS, status} as const)

export const getProfileUserThunkCreator = (userId: string) => (dispatch: Dispatch) => {
  profileApi.getProfileUser(userId)
    .then((res) => {
      dispatch(getProfileUserAC(res.data))
    })
}


export const getStatusProfileUserThunkCreator = (userId: number) => (dispatch: Dispatch) => {
  profileApi.getStatus(userId)
    .then((res) => {
      dispatch(setStatusProfileUserAC(res.data))
    })
}

export const updateStatusProfileUserThunkCreator = (status: string) => (dispatch: Dispatch) => {
  profileApi.updateStatus(status)
    .then((res) => {
        dispatch(setStatusProfileUserAC(status))
    })
}