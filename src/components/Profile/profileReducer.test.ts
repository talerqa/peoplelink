import {
  addPostAC,
  deleteDataProfileUserAC,
  deletePostAC,
  getProfileUserAC,
  initState,
  profileReducer,
  setPostsAC,
  setStatusProfileUserAC,
  updateNewPostTextAC
} from './profileReducer';
import {ProfilePageType} from "../../type";
import {v1} from "uuid";

let state: ProfilePageType

beforeEach(() => {
  state = {
    posts: [
      {id: v1(), message: 'Hi how are you', likesCount: 7},
      {id: v1(), message: 'It\'s my first project', likesCount: 4},
      {id: v1(), message: 'Its my second project', likesCount: 1},
    ],
    profile: {
      userId: 1,
      lookingForAJob: true,
      lookingForAJobDescription: 'looking',
      fullName: 'Alex',
      contacts: null,
      photos: null,
      aboutMe: 'none'
    },
    newPostText: '',
    status: '',
  }
})

describe('profileReducer', () => {
  it('should add a new post', () => {
    const newState = profileReducer(state, addPostAC('New Post Text'));
    expect(newState.posts.length).toBe(state.posts.length + 1);
    expect(newState.posts[newState.posts.length - 1].message).toBe('New Post Text');
  });

  it('should delete a post', () => {
    const postIdToDelete = state.posts[0].id;
    const newState = profileReducer(state, deletePostAC(postIdToDelete));
    expect(newState.posts.some(post => post.id === postIdToDelete)).toBe(false);
  });

  it('should set posts to initial state', () => {
    const newState = profileReducer(state, setPostsAC());
    expect(newState.posts).toBe(state.posts);
  });

  it('should update new post text', () => {
    const newText = 'New Text';
    const newState = profileReducer(state, updateNewPostTextAC(newText));
    expect(newState.newPostText).toBe(newText);
  });

  it('should set profile user data', () => {
    const newState = profileReducer(state, getProfileUserAC(state.profile));
    expect(newState.profile).toEqual(state.profile);
  });

  it('should set status profile user', () => {
    const status = 'Online';
    const newState = profileReducer(initState, setStatusProfileUserAC(status));
    expect(newState.status).toBe(status);
  });

  it('should delete profile data', () => {
    const newState = profileReducer(state, deleteDataProfileUserAC());
    expect(newState.posts.length).toBe(0);
  });
});


