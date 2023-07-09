import * as React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {postData} from '../../redux/type';
import {Dispatch} from 'redux';
import {CommonProfileType, getProfileUserAC} from '../../redux/profileReducer';
import {AppRootStateType} from '../../redux/store';
import {RouteComponentProps, withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  componentDidMount() {
    let userId = this.props.match.params.userId

    if (!userId) {
      userId = '2'
    }

    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId, {withCredentials: true,})
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
  profile: ProfileType
  post: Array<postData>
}

type ProfileType = {
  userId: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  photos: {
    small: string
    large: string
  }
}

type MapDispatchToPropsProfileType = {
  getProfileUserAC: (profile: any) => void
}


const mapStateToProps = (state: AppRootStateType): MapStateToPropsProfileType => {
  return {
    profile: state.profileReducer.profile,
    post: state.profileReducer.posts,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<CommonProfileType>): MapDispatchToPropsProfileType => {
  return {
    getProfileUserAC: (profile: any) => {
      dispatch(getProfileUserAC(profile))
    }
  }
}

//
let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsProfileType, MapDispatchToPropsProfileType, PropsType, AppRootStateType>(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent)