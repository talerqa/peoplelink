import * as React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {postData} from '../../redux/type';
import {Dispatch} from 'redux';
import {CommonProfileType, getProfileUserAC} from '../../redux/profileReducer';
import {AppRootStateType} from '../../redux/store';


class ProfileContainer extends React.Component<ProfilePropsType> {
  constructor(props: ProfilePropsType) {
    super(props);
  }


  componentDidMount() {

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`, {
        withCredentials: true,
      }
    )
      .then((res) => {
        this.props.getProfileUserAC(res.data)
      })
  }


  render() {
    return (
      <div>
        <Profile profile={this.props.profile} posts={this.props.post}/>
      </div>)
  }
}

type ProfilePropsType = MapStateToPropsProfileType & MapDispatchToPropsProfileType

type MapStateToPropsProfileType = {
  profile: any
  post: Array<postData>
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


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)