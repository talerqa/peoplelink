import {MyUsersPageType, UserType} from '../../type';
import {profileApi, userApi} from '../../api/api';
import {Dispatch} from 'redux';
import {handleServerAppError, handleServerNetworkError} from '../../utils/error-utils';
import {setAppStatusAC} from "../../app/appReducer";

const initState: MyUsersPageType = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
}

export const usersReducer = (state = initState, action: CommonUserType): MyUsersPageType => {
  switch (action.type) {
    case 'users/FOLLOW-USER': {
      return {
        ...state,
        users: state.users.map(user => user.id === action.userID ? {...user, followed: true} : user)
      }
    }
    case 'users/UNFOLLOW-USER': {
      return {
        ...state,
        users: state.users.map(user => user.id === action.userID ? {...user, followed: false} : user)
      }
    }
    case 'users/SET-USER': {
      return {...state, users: [...action.users]}
    }
    case 'users/SET-CURRENT-PAGE' : {
      return {...state, currentPage: action.currentPage}
    }
    case 'users/TOTAL-USERS-COUNT': {
      return {...state, totalUsersCount: action.count}
    }
    case 'users/SET-PAGE-SIZE': {
      return {...state, pageSize: action.pageSize}
    }
    case 'users/FETCHING-USERS': {
      return {...state, isFetching: action.isFetching}
    }
    case 'users/DELETE-DATA-USERS': {
      return {
        ...state,
        users: [],
        totalUsersCount: initState.totalUsersCount,
        pageSize: initState.pageSize,
        currentPage: initState.currentPage
      }
    }
    default:
      return state
  }
}

export enum ResultCode {
  OK = 0,
  ERROR = 1,
  CAPTCHA = 10,
}

export type CommonUserType =
  | FollowUserType
  | UnFollowUserType
  | SetUserType
  | SetCurrentPageType
  | SetPageSizeType
  | SetTotalUsersCountType
  | FetchUsersType
  | DeleteDataUsersACType

export type FollowUserType = ReturnType<typeof followUserAC>
export type UnFollowUserType = ReturnType<typeof unFollowUserAC>
export type SetUserType = ReturnType<typeof setUserAC>
export type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export type SetPageSizeType = ReturnType<typeof setPageSizeAC>
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
export type FetchUsersType = ReturnType<typeof fetchUsersCountAC>
export type DeleteDataUsersACType = ReturnType<typeof deleteDataUsersAC>

export const followUserAC = (userID: number) => ({type: 'users/FOLLOW-USER', userID} as const)
export const unFollowUserAC = (userID: number) => ({type: 'users/UNFOLLOW-USER', userID} as const)
export const setUserAC = (users: UserType[]) => ({type: 'users/SET-USER', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'users/SET-CURRENT-PAGE', currentPage} as const)
export const setPageSizeAC = (pageSize: number) => ({type: 'users/SET-PAGE-SIZE', pageSize} as const)
export const setTotalUsersCountAC = (count: number) => ({type: 'users/TOTAL-USERS-COUNT', count} as const)
export const fetchUsersCountAC = (isFetching: boolean) => ({type: 'users/FETCHING-USERS', isFetching} as const)
export const deleteDataUsersAC = () => ({type: 'users/DELETE-DATA-USERS'} as const)

export const getUsersThunkCreator = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
  dispatch(fetchUsersCountAC(true))
  dispatch(setAppStatusAC('loading'))
  try {
    const res = await userApi.getUsers(page, pageSize)
    dispatch(fetchUsersCountAC(false))
    dispatch(setCurrentPageAC(page))
    dispatch(setUserAC(res.items))
    dispatch(setTotalUsersCountAC(res.totalCount))
    dispatch(setAppStatusAC('succeeded'))
  } catch (e) {
    const error = e as { message: string }
    handleServerNetworkError(error, dispatch)
  } finally {
    dispatch(setAppStatusAC('idle'))
  }
}

export const unFollowUserThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))
  try {
    const res = await profileApi.unfollowUser(userId)
    if (res.data.resultCode === ResultCode.OK) {
      dispatch(unFollowUserAC(userId))
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

export const followUserThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))
  try {
    const res = await profileApi.followUser(userId)
    if (res.data.resultCode === ResultCode.OK) {
      dispatch(followUserAC(userId))
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

