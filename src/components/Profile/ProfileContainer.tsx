import * as React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {postData, ProfileType, UserType} from '../../type';
import {
  getProfileUserAC,
  getProfileUserThunkCreator,
  getStatusProfileUserThunkCreator,
  setPhotoThunkCreator,
  updateStatusProfileUserThunkCreator
} from './profileReducer';
import {AppRootStateType} from '../../app/store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import {getUsersThunkCreator} from "../Users/usersReducer";

class ProfileContainer extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = `${this.props.userId}`
      if (!userId) {
        this.props.history.push('/profile/')
      }
    }
    this.props.getProfileUserThunkCreator(userId)
    this.props.getStatusProfile(userId)
  }

  componentDidMount() {
    this.refreshProfile()
    this.props.getUsers()
  }

  componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) return this.refreshProfile()
  }

  render() {
    return (<Profile {...this.props}
                     users={this.props.users}
                     profile={this.props.profile}
                     isOwner={!this.props.match.params.userId}
                     posts={this.props.post}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusProfile}
                     savePhoto={this.props.setPhotoProfile}
    />)
  }
}

type PathParamsType = { userId: string }
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = MapStateToPropsProfileType & MapDispatchToPropsProfileType

type MapStateToPropsProfileType = {
  profile: ProfileType | null
  post: Array<postData>
  status: string
  userId: number | null
  users: UserType[]
}

export type MapDispatchToPropsProfileType = {
  getProfileUserAC: (profile: ProfileType) => void
  getProfileUserThunkCreator: (userId: number | null | string) => void
  getStatusProfile: (userId: number | null | string) => void
  updateStatusProfile: (status: string) => void
  setPhotoProfile: (photo: File) => void
  getUsers: () => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsProfileType => {
  return {
    profile: state.profileReducer.profile,
    post: state.profileReducer.posts,
    status: state.profileReducer.status,
    userId: state.authReducer.id,
    users: state.usersReducer.users
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getProfileUserAC: getProfileUserAC,
    getProfileUserThunkCreator: getProfileUserThunkCreator,
    getStatusProfile: getStatusProfileUserThunkCreator,
    updateStatusProfile: updateStatusProfileUserThunkCreator,
    setPhotoProfile: setPhotoThunkCreator,
    getUsers: getUsersThunkCreator,
  }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)

