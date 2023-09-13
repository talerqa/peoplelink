import * as React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {postData, ProfileType} from '../../type';
import {
  getProfileUserAC,
  getProfileUserThunkCreator,
  getStatusProfileUserThunkCreator,
  updateStatusProfileUserThunkCreator
} from './profileReducer';
import {AppRootStateType} from '../../app/store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  componentDidMount() {
    let userId = this.props.match.params.userId

    if (!userId) {
      userId = `${this.props.userId}`
      if(!userId) {
        this.props.history.push('/profile')
      }
    }

    this.props.getProfileUserThunkCreator(userId)
    this.props.getStatusProfile(userId)
  }

  render() {
    return (<Profile {...this.props}
                     profile={this.props.profile}
                     posts={this.props.post}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusProfile}
    />)
  }
}

type PathParamsType = {
  userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

type OwnPropsType = MapStateToPropsProfileType & MapDispatchToPropsProfileType

type MapStateToPropsProfileType = {
  profile: null | ProfileType
  post: Array<postData>
  status: string
  userId: number | null
}

export type MapDispatchToPropsProfileType = {
  getProfileUserAC: (profile: ProfileType) => void
  getProfileUserThunkCreator: (userId: number | null | string) => void
  getStatusProfile: (userId: number | null | string) => void
  updateStatusProfile: (status: string) => void
}


const mapStateToProps = (state: AppRootStateType): MapStateToPropsProfileType => {
  return {
    profile: state.profileReducer.profile,
    post: state.profileReducer.posts,
    status: state.profileReducer.status,
    userId: state.authReducer.id,
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getProfileUserAC: getProfileUserAC,
    getProfileUserThunkCreator: getProfileUserThunkCreator,
    getStatusProfile: getStatusProfileUserThunkCreator,
    updateStatusProfile: updateStatusProfileUserThunkCreator,
  }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)


// <MapStateToPropsProfileType, MapDispatchToPropsProfileType, PropsType, AppRootStateType>