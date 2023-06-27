import {MyUsersPageType, UsersType} from './type';

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USER = 'SET-USER';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';

const initState: MyUsersPageType = {
  users: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
}

export const usersReducer = (state = initState, action: CommonUserType): MyUsersPageType => {
  switch (action.type) {
    case FOLLOW_USER: {
      return {
        ...state,
        users: state.users.map(user => user.id === action.payload.userID ? {...user, followed: true} : user)
      }
    }
    case UNFOLLOW_USER: {
      return {
        ...state,
        users: state.users.map(user => user.id === action.payload.userID ? {...user, followed: false} : user)
      }
    }
    case SET_USER: {
      return {...state, users: [...action.payload.users]}
    }
    case SET_CURRENT_PAGE : {
     return {...state, currentPage: action.payload.currentPage}
    }
    case TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.payload.count}
    }
    default:
      return state
  }
}

export type CommonUserType = FollowUserType | UnFollowUserType | SetUserType | SetCurrentPageType | setTotalUsersCountType
export type FollowUserType = ReturnType<typeof followUserAC>
export type UnFollowUserType = ReturnType<typeof unFollowUserAC>
export type SetUserType = ReturnType<typeof setUserAC>
export type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>

export const followUserAC = (userID: number) => {
  return {
    type: FOLLOW_USER,
    payload: {
      userID
    }
  } as const
}

export const unFollowUserAC = (userID: number) => {
  return {
    type: UNFOLLOW_USER,
    payload: {
      userID
    }
  } as const
}

export const setUserAC = (users: UsersType[]) => {
  return {
    type: SET_USER,
    payload: {
      users
    }
  } as const
}

export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: {
      currentPage
    }
  } as const
}

export const setTotalUsersCountAC = (count: number) => {
  return {
    type: TOTAL_USERS_COUNT,
    payload: {
      count
    }
  } as const
}