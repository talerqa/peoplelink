import {addPostAC, profileReducer} from './profileReducer';

import {v1} from 'uuid';
import {ProfilePageType} from '../../type';

test('new post should be add', () => {
  let action = addPostAC('IT-KAMASUTRA');
  let state: ProfilePageType = {
    posts: [
      {id: v1(), message: 'Hi how are you', likesCount: 7},
      {id: v1(), message: 'It\'s my first project', likesCount: 4},
      {id: v1(), message: 'Its my second project', likesCount: 1},
    ],
    profile: null,
    newPostText: '',
    status: '',
  }
  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(4)
  expect(newState.posts[3].message).toBe('IT-KAMASUTRA')
})

test('post should be delete', () => {
  let action = addPostAC('IT-KAMASUTRA');
  let state: ProfilePageType = {
    posts: [
      {id: v1(), message: 'Hi how are you', likesCount: 7},
      {id: v1(), message: 'It\'s my first project', likesCount: 4},
      {id: v1(), message: 'Its my second project', likesCount: 1},
    ],
    profile: null,
    newPostText: '',
    status: '',
  }
  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(4)
  expect(newState.posts[3].message).toBe('IT-KAMASUTRA')
})