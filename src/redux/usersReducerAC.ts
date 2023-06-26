import {MyUsersPageType, UsersType} from './type';

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USER = 'SET-USER';

const initState: MyUsersPageType = {
  users: [],
}

export const usersReducerAC = (state = initState, action: CommonUserType): MyUsersPageType => {
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
      return {...state, users: [...state.users, ...action.payload.users]}
    }
    default:
      return state
  }
}

export type CommonUserType = FollowUserType | UnFollowUserType | SetUserType

export type FollowUserType = ReturnType<typeof followUserAC>
export type UnFollowUserType = ReturnType<typeof unFollowUserAC>
export type SetUserType = ReturnType<typeof setUserAC>

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

// Follow unfollow при нажатии кнопки мапяться друзья
// export type AddPostACType = ReturnType<typeof addPostAC>
// export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
//
// export const addPostAC = (title: string) => ({type: ADD_POST, title} as const)
//
// export const updateNewPostTextAC = (title: string) => ({
//   type: UPDATE_NEWPOST_TEXT, title
// } as const)
//