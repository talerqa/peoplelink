import * as React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {MyUsersPageType, UsersType} from '../../redux/type';
import {CommonUserType, followUserAC, setUserAC, unFollowUserAC} from '../../redux/usersReducerAC';
import {Users} from './Users';
import {Dispatch} from 'redux';

class UsersContainer extends React.Component<UsersPropsType> {
  // constructor(props: UsersPropsType) {
  //   super(props);
  // }
  //
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
        users={this.props.users.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        setUsers={this.props.setUsers}
      />
    </>
  }
}

type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
  users: MyUsersPageType
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    users: state.usersReducer
  }
}

type MapDispatchToPropsType = {
  follow: (userId: number) => void,
  unfollow: (userId: number) => void,
  setUsers: (users: UsersType[]) => void,
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
