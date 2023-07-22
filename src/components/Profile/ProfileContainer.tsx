import * as React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {postData, ProfileType} from '../../redux/type';
import {getProfileUserAC, getProfileUserThunkCreator} from '../../redux/profileReducer';
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
      userId = '2'
    }
    this.props.getProfileUserThunkCreator(userId)
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} posts={this.props.post}/>
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
}

export type MapDispatchToPropsProfileType = {
  getProfileUserAC: (profile: ProfileType) => void
  getProfileUserThunkCreator: (userId: string) => void
}


const mapStateToProps = (state: AppRootStateType): MapStateToPropsProfileType => {
  return {
    profile: state.profileReducer.profile,
    post: state.profileReducer.posts,
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getProfileUserAC: getProfileUserAC,
    getProfileUserThunkCreator: getProfileUserThunkCreator
  }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)


// <MapStateToPropsProfileType, MapDispatchToPropsProfileType, PropsType, AppRootStateType>