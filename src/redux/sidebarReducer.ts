// const ADD_POST = 'ADD-POST';
// const UPDATE_NEWPOST_TEXT = 'UPDATE-NEWPOST-TEXT';


import {SideBarType} from './store';

const initState: SideBarType = {
  friends: []
}

export const sidebarReducer = (state = initState, action: any) => {
  switch (action.type) {

    default:
      return state
  }
}

// export type AddPostACType = ReturnType<typeof addPostAC>
// export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
//
// export const addPostAC = (title: string) => ({type: ADD_POST, title} as const)
//
// export const updateNewPostTextAC = (title: string) => ({
//   type: UPDATE_NEWPOST_TEXT, title
// } as const)
//
