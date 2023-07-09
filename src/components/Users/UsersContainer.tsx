import * as React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {UsersType} from '../../redux/type';
import {
  fetchUsersCountAC,
  followUserAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUserAC,
  unFollowUserAC
} from '../../redux/usersReducer';
import {Users} from './Users';
import axios from 'axios';

class UsersContainer extends React.Component<UsersPropsType> {
  constructor(props: UsersPropsType) {
    super(props);
  }

  componentDidMount() {

    this.props.fetchUsersCount(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
        withCredentials: true,
      }
    )
      .then((res) => {
        this.props.fetchUsersCount(false)
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.fetchUsersCount(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
      withCredentials: true,

    })
      .then((res) => {
        this.props.fetchUsersCount(false)
        this.props.setUsers(res.data.items)
        this.props.setCurrentPage(pageNumber)
      })
  }

  // componentDidMount() {
  //   this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
  // }
  //
  // onPageChanged = (pageNumber: number) => {
  //   this.props.getUsersTC(pageNumber, this.props.pageSize)
  // }
  // onPageSize = (pageSize: number) => {
  //   this.props.getUsersTC(this.props.currentPage, pageSize)
  // }
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
  users: UsersType[],
  pageSize: number
  totalCount: number
  currentPage: number
  isFetching: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
  }
}

type MapDispatchToPropsType = {
  follow: (userId: number) => void,
  unfollow: (userId: number) => void,
  setUsers: (users: UsersType[]) => void,
  setCurrentPage: (currentPage: number) => void,
  setTotalUsersCount: (count: number) => void,
  fetchUsersCount: (isFetching: boolean) => void
}

// const mapDispatchToProps = (dispatch: Dispatch<CommonUserType>): MapDispatchToPropsType => {
//   return {
//     follow: (userId) => {
//       dispatch(followUserAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unFollowUserAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUserAC(users))
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (count) => {
//       dispatch(setTotalUsersCountAC(count))
//     },
//     fetchUsersCount: (isFetching) => {
//       dispatch(fetchUsersCountAC(isFetching))
//     }
//
//   }
// }

export default connect(mapStateToProps, {
    follow: followUserAC,
    unfollow: unFollowUserAC,
    setUsers: setUserAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    fetchUsersCount: fetchUsersCountAC
  }
)(UsersContainer)
