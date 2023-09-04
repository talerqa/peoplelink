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

describe('profileReducer', () => {
  it('should add a new post', () => {
    const newState = profileReducer(initState, addPostAC('New Post Text'));
    expect(newState.posts.length).toBe(initState.posts.length + 1);
    expect(newState.posts[newState.posts.length - 1].message).toBe('New Post Text');
  });

  it('should delete a post', () => {
    const postIdToDelete = initState.posts[0].id;
    const newState = profileReducer(initState, deletePostAC(postIdToDelete));
    expect(newState.posts.some(post => post.id === postIdToDelete)).toBe(false);
  });

  it('should set posts to initial state', () => {
    const modifiedState = {...initState, posts: [{id: '1', message: 'Post', likesCount: 0}]};
    const newState = profileReducer(modifiedState, setPostsAC());
    expect(newState).toEqual(initState);
  });

  it('should update new post text', () => {
    const newText = 'New Text';
    const newState = profileReducer(initState, updateNewPostTextAC(newText));
    expect(newState.newPostText).toBe(newText);
  });

  it('should set profile user data', () => {
    const profileData = {
      userId: 1,
      lookingForAJob: true,
      lookingForAJobDescription: 'looking',
      fullName: 'Alex',
      contacts: null,
      photos: null,
      aboutMe: 'none'
    };
    const newState = profileReducer(initState, getProfileUserAC(profileData));
    expect(newState.profile).toEqual(profileData);
  });

  it('should set status profile user', () => {
    const status = 'Online';
    const newState = profileReducer(initState, setStatusProfileUserAC(status));
    expect(newState.status).toBe(status);
  });

  it('should delete profile data', () => {
    const modifiedState = {
      ...initState, profile: {
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: 'looking',
        fullName: 'Alex',
        contacts: null,
        photos: null,
        aboutMe: 'none'
      }
    };
    const newState = profileReducer(modifiedState, deleteDataProfileUserAC());
    expect(newState.posts.length).toBe(0);
  });
});


