import * as React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {postData, ProfileType} from '../../redux/type';
import {Dispatch} from 'redux';
import {CommonProfileType, getProfileUserAC} from '../../redux/profileReducer';
import {AppRootStateType} from '../../redux/store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {profileApi} from '../../api/api';

class ProfileContainer extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2'
    }
    profileApi.getProfileUser(userId)
      .then((res) => {
        this.props.getProfileUserAC(res.data)
      })
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

type MapDispatchToPropsProfileType = {
  getProfileUserAC: (profile: ProfileType) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsProfileType => {
  return {
    profile: state.profileReducer.profile,
    post: state.profileReducer.posts,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<CommonProfileType>): MapDispatchToPropsProfileType => {
  return {
    getProfileUserAC: (profile: ProfileType) => {
      dispatch(getProfileUserAC(profile))
    }
  }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent)
// <MapStateToPropsProfileType, MapDispatchToPropsProfileType, PropsType, AppRootStateType>