import * as React from 'react';
import {ProfilePageType} from '../../../type';
import {addPostAC, decLikeCountPostAC, deletePostAC, incLikeCountPostAC} from '../profileReducer';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../../app/store';
import {Dispatch} from 'redux';
import {MyPosts} from "./MyPosts";

type  PropsType = {
  profile: any
  isOwner: boolean
} & MapDispatchToPropsType & MapStateToPropsProfileType

class MyPostContainer extends React.Component<PropsType> {
  componentDidMount() {
  }

  render() {
    return <MyPosts
      isOwner={this.props.isOwner}
      profilePost={this.props.profilePost}
      addPost={this.props.addPost}
      deletePost={this.props.deletePost}
      profileInfo={this.props.profile}
      incLike={this.props.incLikeCount}
      decLike={this.props.decLikeCount}
    />;
  }
}

export type MapStateToPropsProfileType = {
  profilePost: ProfilePageType
}

export type MapDispatchToPropsType = {
  addPost: (title: string) => void
  deletePost: (id: string) => void
  incLikeCount: (id: string, likeCount: number) => void
  decLikeCount: (id: string, likeCount: number) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsProfileType => {
  return {
    profilePost: state.profileReducer
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addPost: (title) => dispatch(addPostAC(title)),
    incLikeCount: (id, likeCount) => dispatch(incLikeCountPostAC(id, likeCount)),
    decLikeCount: (id, likeCount) => dispatch(decLikeCountPostAC(id, likeCount)),
    deletePost: (id) => dispatch(deletePostAC(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPostContainer)



