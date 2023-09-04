import {MyUsersPageType, UserType} from '../../type';
import {profileApi, userApi} from '../../api/api';
import {Dispatch} from 'redux';
import {handleServerAppError, handleServerNetworkError} from '../../utils/error-utils';

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USER = 'SET-USER';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_PAGE_SIZE = 'SET-PAGE-SIZE';
const TOTAL_USERS_COUNT = 'TOTAL-USERS-COUNT';
const FETCHING_USERS = 'FETCHING-USERS';
const DELETE_DATA_USERS = 'DELETE-DATA-USERS';

const initState: MyUsersPageType = {
  users: [],
  pageSize: 28,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
}

export const usersReducer = (state = initState, action: CommonUserType): MyUsersPageType => {
  switch (action.type) {
    case FOLLOW_USER: {
      return {
        ...state,
        users: state.users.map(user => user.id === action.userID ? {...user, followed: true} : user)
      }
    }

    case UNFOLLOW_USER: {
      return {
        ...state,
        users: state.users.map(user => user.id === action.userID ? {...user, followed: false} : user)
      }
    }

    case SET_USER: {
      return {...state, users: [...action.users]}
    }

    case SET_CURRENT_PAGE : {
      return {...state, currentPage: action.currentPage}
    }

    case TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.count}
    }

    case SET_PAGE_SIZE: {
      return {...state, pageSize: action.pageSize}
    }

    case FETCHING_USERS: {
      return {...state, isFetching: action.isFetching}
    }

    case DELETE_DATA_USERS: {
      return {...state, users: [], totalUsersCount: initState.totalUsersCount, pageSize: initState.pageSize, currentPage: initState.currentPage}
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

export const followUserAC = (userID: number) => ({type: FOLLOW_USER, userID} as const)

export const unFollowUserAC = (userID: number) => ({type: UNFOLLOW_USER, userID} as const)

export const setUserAC = (users: UserType[]) => ({type: SET_USER, users} as const)

export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)

export const setPageSizeAC = (pageSize: number) => ({type: SET_PAGE_SIZE, pageSize} as const)

export const setTotalUsersCountAC = (count: number) => ({type: TOTAL_USERS_COUNT, count} as const)

export const fetchUsersCountAC = (isFetching: boolean) => ({type: FETCHING_USERS, isFetching} as const)

export const deleteDataUsersAC = () => ({type: DELETE_DATA_USERS} as const)


//THUNK

export const getUsersThunkCreator = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
  dispatch(fetchUsersCountAC(true))
  try {
    const res = await userApi.getUsers(page, pageSize)
    dispatch(fetchUsersCountAC(false))
    dispatch(setCurrentPageAC(page))
    dispatch(setUserAC(res.items))
    dispatch(setTotalUsersCountAC(res.totalCount))
  } catch (e) {
    const error = e as { message: string }
    handleServerNetworkError(error, dispatch)

  }
}

export const unFollowUserThunkCreator = (userId: number) => async (dispatch: Dispatch) => {

    try {
      const res = await  profileApi.unfollowUser(userId)
      if (res.data.resultCode === ResultCode.OK) {
        dispatch(unFollowUserAC(userId))
      } else {
        handleServerAppError(res.data, dispatch)
      }
  } catch (e) {

      const error = e as { message: string }
      handleServerNetworkError(error, dispatch)
    }
}

export const followUserThunkCreator = (userId: number) => async (dispatch: Dispatch) => {

  try {
    const res = await profileApi.followUser(userId)
    if (res.data.resultCode === ResultCode.OK) {
      dispatch(followUserAC(userId))
    } else {
      handleServerAppError(res.data, dispatch)
    }
  } catch (e) {
    const error = e as { message: string }
    handleServerNetworkError(error, dispatch)
  }
}

