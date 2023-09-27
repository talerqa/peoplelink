import {PhotosProfileType, postData, ProfilePageType, ProfileType} from '../../type';
import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {profileApi} from '../../api/api';
import {handleServerAppError, handleServerNetworkError} from '../../utils/error-utils';
import {setAppStatusAC} from "../../app/appReducer";
import {ResultCode, setCurrentPageAC} from "../Users/usersReducer";
import {AppRootStateType} from "../../app/store";

export const initStateProfilePage: ProfilePageType = {
  posts: [
    {id: v1(), message: 'Hi how are you', likesCount: 7, liked: false},
    {id: v1(), message: 'It\'s my first project', likesCount: 4, liked: true},
    {id: v1(), message: 'Its my second project', likesCount: 1, liked: false},
  ],
  profile: null as ProfileType | null,
  newPostText: '',
  status: '',
}

export type CommonProfileType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof getProfileUserAC>
  | ReturnType<typeof setStatusProfileUserAC>
  | ReturnType<typeof deleteDataProfileUserAC>
  | ReturnType<typeof setPostsAC>
  | ReturnType<typeof deletePostAC>
  | ReturnType<typeof setPhotoAC>
  | ReturnType<typeof decLikeCountPostAC>
  | ReturnType<typeof incLikeCountPostAC>

export const profileReducer = (state = initStateProfilePage, action: CommonProfileType) => {
  switch (action.type) {
    case 'profile/ADD-POST': {
      const newPost: postData = {id: v1(), message: action.title, likesCount: 0, liked: false};
      return {
        ...state,
        posts: [newPost, ...state.posts]
      }
    }
    case 'profile/DELETE-POST': {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.id)
      }
    }
    case 'profile/INC-LIKE' : {

      return {
        ...state,
        posts: [...state.posts].map(post => post.id === action.id ? {...post, likesCount: action.likeCount} : post)
      }
    }
    case 'profile/DEC-LIKE' : {
      return {
        ...state,
        posts: [...state.posts].map(post => post.id === action.id ? {...post, likesCount: action.likeCount} : post)
      }
    }
    case 'profile/SET-POSTS': {
      return {...state, posts: action.posts}
    }
    case 'profile/UPDATE-NEWPOST-TEXT' : {
      return {...state, newPostText: action.title}
    }
    case 'profile/GET-PROFILE-USERS': {
      return {...state, profile: action.profile}
    }
    case 'profile/SET-STATUS': {
      return {...state, status: action.status}
    }
    case 'profile/SET-PHOTO' : {
      return {...state, profile: {...state.profile, photos: action.photos}}
    }
    case 'profile/DELETE-DATA-PROFILE': {
      return {...state, posts: [], newPostText: '', status: ''}
    }
    default:
      return state
  }
}

export type DeleteDataProfileACType = ReturnType<typeof deleteDataProfileUserAC>
export type SetPostsProfileACType = ReturnType<typeof setPostsAC>

export const addPostAC = (title: string) => ({type: 'profile/ADD-POST', title} as const)
export const deletePostAC = (id: string) => ({type: 'profile/DELETE-POST', id} as const)
export const setPostsAC = (posts: Array<postData>) => ({type: 'profile/SET-POSTS', posts} as const)
export const updateNewPostTextAC = (title: string) => ({type: 'profile/UPDATE-NEWPOST-TEXT', title} as const)
export const getProfileUserAC = (profile: ProfileType | null) => ({type: 'profile/GET-PROFILE-USERS', profile} as const)
export const setStatusProfileUserAC = (status: string) => ({type: 'profile/SET-STATUS', status} as const)
export const deleteDataProfileUserAC = () => ({type: 'profile/DELETE-DATA-PROFILE'} as const)
export const setPhotoAC = (photos: PhotosProfileType) => ({type: 'profile/SET-PHOTO', photos} as const)
export const decLikeCountPostAC = (id: string, likeCount: number) => ({
  type: 'profile/DEC-LIKE',
  id,
  likeCount
} as const)
export const incLikeCountPostAC = (id: string, likeCount: number) => ({
  type: 'profile/INC-LIKE',
  id,
  likeCount
} as const)


//THUNK
export const getProfileUserThunkCreator = (page: number, userId: string) => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))
  try {
    dispatch(setPostsAC(initStateProfilePage.posts))
    const res = await profileApi.getProfileUser(userId)
    dispatch(getProfileUserAC(res.data))
    dispatch(setAppStatusAC('succeeded'))
    dispatch(setCurrentPageAC(page))
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

export const setPhotoThunkCreator = (photo: File) => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))
  try {
    const res = await profileApi.setPhoto(photo)
    if (res.data.resultCode === ResultCode.OK) {
      dispatch(setPhotoAC(res.data.data.photos))
      dispatch(setAppStatusAC('succeeded'))
    } else {
      handleServerAppError(res.data, dispatch)
    }
  } catch (e) {
    const error = e as { message: string }
    handleServerNetworkError(error, dispatch)
  } finally {
    dispatch(setAppStatusAC('idle'))
  }
}