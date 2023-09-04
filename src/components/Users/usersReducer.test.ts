import {
  deleteDataUsersAC,
  fetchUsersCountAC,
  followUserAC,
  setCurrentPageAC,
  setPageSizeAC,
  setTotalUsersCountAC,
  setUserAC,
  unFollowUserAC,
  usersReducer,
} from './usersReducer';
import {MyUsersPageType, UserType} from "../../type";

let state: MyUsersPageType
let users: UserType[]

beforeEach(() => {
  state = {
    users: [
      {
        id: 1,
        name: 'Alex',
        uniqueUrlName: 'url-1',
        status: 'status-1',
        followed: false,
        photos: {
          small: '',
          large: ''
        }
      },
      {
        id: 2,
        name: 'Nike',
        uniqueUrlName: 'url-2',
        status: 'status-2',
        followed: true,
        photos: {
          small: '',
          large: ''
        }
      }
    ],
    pageSize: 28,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
  }
  users = [
    {
      id: 1,
      name: 'Alex',
      uniqueUrlName: 'url-1',
      status: 'status-1',
      followed: false,
      photos: {
        small: '',
        large: ''
      }
    },
    {
      id: 2,
      name: 'Nike',
      uniqueUrlName: 'url-2',
      status: 'status-2',
      followed: true,
      photos: {
        small: '',
        large: ''
      }
    },
    {
      id: 3,
      name: 'Sveta',
      uniqueUrlName: 'url-3',
      status: 'status-3',
      followed: true,
      photos: {
        small: '',
        large: ''
      }
    },
  ]
})

describe('usersReducer', () => {
  it('should follow a user', () => {
    const action = followUserAC(1);
    const newState = usersReducer(state, action);
    expect(newState.users[0].followed).toBe(true);
  });
  it('should unfollow a user', () => {
    const action = unFollowUserAC(2);
    const newState = usersReducer(state, action);
    expect(newState.users[1].followed).toBe(false);
  });
  it('should set users', () => {
    const action = setUserAC(users);
    const newState = usersReducer(state, action);
    expect(newState.users).toEqual(users);
  });
  it('should set current page', () => {
    const action = setCurrentPageAC(state.currentPage);
    const newState = usersReducer(state, action);
    expect(newState.currentPage).toEqual(1);
  });
  it('should set page size', () => {
    const action = setPageSizeAC(state.pageSize);
    const newState = usersReducer(state, action);
    expect(newState.pageSize).toEqual(28);
  });
  it('should set total user count', () => {
    const action = setTotalUsersCountAC(state.totalUsersCount);
    const newState = usersReducer(state, action);
    expect(newState.totalUsersCount).toEqual(100);
  });
  it('should set fetch user count', () => {
    const action = fetchUsersCountAC(false);
    const newState = usersReducer(state, action);
    expect(newState.isFetching).toEqual(false);
  });
  it('should delete data user', () => {
    const action = deleteDataUsersAC();
    const newState = usersReducer(state, action);
    expect(newState.users.length).toEqual(0);
  });
});
