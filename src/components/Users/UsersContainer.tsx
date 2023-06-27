import * as React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {MyUsersPageType, UsersType} from '../../redux/type';
import {
  CommonUserType,
  followUserAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUserAC,
  unFollowUserAC
} from '../../redux/usersReducer';
import {Users} from './Users';
import {Dispatch} from 'redux';
import axios from 'axios';

class UsersContainer extends React.Component<UsersPropsType> {
  // constructor(props: UsersPropsType) {
  //   super(props);
  // }

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
      .then((res) => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      })
  }

  onPageChanged = (pageNumber: number) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true})
      .then((res) => {
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
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
  }
}

type MapDispatchToPropsType = {
  follow: (userId: number) => void,
  unfollow: (userId: number) => void,
  setUsers: (users: UsersType[]) => void,
  setCurrentPage: (currentPage: number) => void,
  setTotalUsersCount: (count: number) => void,
}

const mapDispatchToProps = (dispatch: Dispatch<CommonUserType>): MapDispatchToPropsType => {
  return {
    follow: (userId) => {
      dispatch(followUserAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unFollowUserAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUserAC(users))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (count: number) => {
      dispatch(setTotalUsersCountAC(count))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
