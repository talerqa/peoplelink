import {AppRootStateType} from '../../app/store';

export const getUsers = (state: AppRootStateType) =>{
  return state.usersReducer.users
}

export const getPageSize = (state: AppRootStateType) =>{
  return state.usersReducer.pageSize
}

export const getTotalCount = (state: AppRootStateType) =>{
  return state.usersReducer.totalUsersCount
}

export const getCurrentPage = (state: AppRootStateType) =>{
  return state.usersReducer.currentPage
}

export const getIsFetching = (state: AppRootStateType) =>{
  return state.usersReducer.isFetching
}
