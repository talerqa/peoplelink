import * as React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {postData, ProfileType} from '../../redux/type';
import {
  getProfileUserAC,
  getProfileUserThunkCreator,
  getStatusProfileUserThunkCreator, updateStatusProfileUserThunkCreator
} from '../../redux/profileReducer';
import {AppRootStateType} from '../../redux/store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component<PropsType> {
  // constructor(props: PropsType) {
  //   super(props);
  // }

  componentDidMount() {
    let userId = this.props.match.params.userId

    if (!userId) {
      userId = '29080'
    }
    this.props.getProfileUserThunkCreator(userId)
    this.props.getStatusProfile(userId)
  }

  render() {
    return (
      <div>
        <Profile {...this.props}
                 profile={this.props.profile}
                 posts={this.props.post}
                 status={this.props.status}
                 updateStatus={this.props.updateStatusProfile}
        />
      </div>)
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

}

export type MapDispatchToPropsProfileType = {
  getProfileUserAC: (profile: ProfileType) => void
  getProfileUserThunkCreator: (userId: string) => void
  getStatusProfile: (userId: string) => void
  updateStatusProfile: (status: string) => void
}


const mapStateToProps = (state: AppRootStateType): MapStateToPropsProfileType => {
  return {
    profile: state.profileReducer.profile,
    post: state.profileReducer.posts,
    status: state.profileReducer.status,
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