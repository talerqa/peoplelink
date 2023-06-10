import {postData, ProfilePageType} from './store';

const ADD_POST = 'ADD-POST';
const UPDATE_NEWPOST_TEXT = 'UPDATE-NEWPOST-TEXT';

const initState: ProfilePageType = {
  posts: [
    {id: 1, message: 'Hi how are you', likesCount: 7},
    {id: 2, message: 'It\'s my first project', likesCount: 4},
    {id: 3, message: 'Its my second project', likesCount: 1},
  ],
  newPostText: '',
}

export const profileReducer = (state = initState, action: any) => {
  switch (action.type) {
    case (ADD_POST): {
      const newPost: postData = {id: 4, message: action.title, likesCount: 0};
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    }
    case (UPDATE_NEWPOST_TEXT) : {
      state.newPostText = action.title
      return state
    }
    default:
      return state
  }
}

type CommonACType = AddPostACType | UpdateNewPostTextACType
export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>

export const addPostAC = (title: string) => ({type: ADD_POST, title} as const)

export const updateNewPostTextAC = (title: string) => ({
  type: UPDATE_NEWPOST_TEXT, title
} as const)

