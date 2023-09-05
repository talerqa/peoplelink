import {postData, ProfilePageType, ProfileType} from '../../type';
import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {profileApi} from '../../api/api';
import {handleServerNetworkError} from '../../utils/error-utils';
import {setAppStatusAC} from "../../app/appReducer";

export const initState: ProfilePageType = {
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
    case 'ADD-POST': {
      const newPost: postData = {id: v1(), message: action.title, likesCount: 0};
      return {
        ...state,
        posts: [...state.posts, newPost]
      }
    }
    case 'DELETE-POST': {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.id)
      }
    }
    case 'SET-POSTS': {
      return state
    }
    case 'UPDATE-NEWPOST-TEXT' : {
      return {...state, newPostText: action.title}
    }
    case 'GET-PROFILE-USERS': {
      return {...state, profile: action.profile}
    }
    case 'SET-STATUS': {
      return {...state, status: action.status}
    }
    case 'DELETE-DATA-PROFILE': {
      return {...state, posts: [], newPostText: '', status: ''}
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
    | ReturnType<typeof deleteDataProfileUserAC>
    | ReturnType<typeof setPostsAC>
    | ReturnType<typeof deletePostAC>

export type DeleteDataProfileACType = ReturnType<typeof deleteDataProfileUserAC>
export type SetPostsProfileACType = ReturnType<typeof setPostsAC>

export const addPostAC = (title: string) => ({type: 'ADD-POST', title} as const)
export const deletePostAC = (id: string) => ({type: 'DELETE-POST', id} as const)
export const setPostsAC = () => ({type: 'SET-POSTS'} as const)
export const updateNewPostTextAC = (title: string) => ({type: 'UPDATE-NEWPOST-TEXT', title} as const)
export const getProfileUserAC = (profile: ProfileType | null) => ({type: 'GET-PROFILE-USERS', profile} as const)
export const setStatusProfileUserAC = (status: string) => ({type: 'SET-STATUS', status} as const)
export const deleteDataProfileUserAC = () => ({type: 'DELETE-DATA-PROFILE'} as const)

//THUNK
export const getProfileUserThunkCreator = (userId: string) => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))
  try {
    dispatch(setPostsAC())
    const res = await profileApi.getProfileUser(userId)
    dispatch(getProfileUserAC(res.data))
    dispatch(setAppStatusAC('succeeded'))
  } catch (e) {
    const error = e as { message: string }
    handleServerNetworkError(error, dispatch)
  } finally {
    dispatch(setAppStatusAC('idle'))
  }
}

export const getStatusProfileUserThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))
  try {
    const res = await profileApi.getStatus(userId)
    dispatch(setStatusProfileUserAC(res.data))
    dispatch(setAppStatusAC('succeeded'))
  } catch (e) {
    const error = e as { message: string }
    handleServerNetworkError(error, dispatch)
  } finally {
    dispatch(setAppStatusAC('idle'))
  }
}

export const updateStatusProfileUserThunkCreator = (status: string) => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))
  try {
    await profileApi.updateStatus(status)
    dispatch(setStatusProfileUserAC(status))
    dispatch(setAppStatusAC('succeeded'))
  } catch (e) {
    const error = e as { message: string }
    handleServerNetworkError(error, dispatch)
  } finally {
    dispatch(setAppStatusAC('idle'))
  }
}