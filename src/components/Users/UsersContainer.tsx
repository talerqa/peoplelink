import * as React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../app/store';
import {UserType} from '../../type';
import {
  fetchUsersCountAC,
  followUserThunkCreator,
  getUsersThunkCreator,
  setCurrentPageAC,
  setPageSizeAC,
  setTotalUsersCountAC,
  setUserAC,
  unFollowUserThunkCreator
} from './usersReducer';
import {Users} from './Users';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import {getCurrentPage, getIsFetching, getPageSize, getTotalCount, getUsers} from './user-selector';

class UsersContainer extends React.Component<UsersPropsType> {
  constructor(props: UsersPropsType) {
    super(props);
  }

  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.getUsersThunkCreator(currentPage, pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
  }

  render() {
    return <>
      <Users
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalCount={this.props.totalCount}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        setUsers={this.props.setUsers}
        isFetching={this.props.isFetching}
      />
    </>
  }
}

type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
  users: UserType[],
  pageSize: number
  totalCount: number
  currentPage: number
  isFetching: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
  }
}

type MapDispatchToPropsType = {
  follow: (userId: number) => void,
  unfollow: (userId: number) => void,
  setUsers: (users: UserType[]) => void,
  setPageSize: (pageSize: number) => void,
  setCurrentPage: (currentPage: number) => void,
  setTotalUsersCount: (count: number) => void,
  fetchUsersCount: (isFetching: boolean) => void,
  getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
      follow: followUserThunkCreator,
      unfollow: unFollowUserThunkCreator,
      setUsers: setUserAC,
      setPageSize: setPageSizeAC,
      setCurrentPage: setCurrentPageAC,
      setTotalUsersCount: setTotalUsersCountAC,
      fetchUsersCount: fetchUsersCountAC,
      getUsersThunkCreator: getUsersThunkCreator,
    }
  ),
  WithAuthRedirect)(UsersContainer)