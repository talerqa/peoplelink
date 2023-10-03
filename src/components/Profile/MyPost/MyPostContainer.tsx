import * as React from "react";
import { ProfilePageType, ProfileType } from "../../../type";
import { addPostAC, deletePostAC } from "../profileReducer";
import { connect } from "react-redux";
import { AppRootStateType } from "../../../app/store";
import { Dispatch } from "redux";
import { MyPosts } from "./MyPosts";

type PropsType = {
  profile: ProfileType | null;
  isOwner: boolean;
} & MapDispatchToPropsType &
  MapStateToPropsProfileType;

class MyPostContainer extends React.Component<PropsType> {
  componentDidMount() {}

  render() {
    return (
      <MyPosts
        isOwner={this.props.isOwner}
        profilePost={this.props.profilePost}
        addPost={this.props.addPost}
        deletePost={this.props.deletePost}
        profileInfo={this.props.profile}
      />
    );
  }
}

export type MapStateToPropsProfileType = {
  profilePost: ProfilePageType;
};

export type MapDispatchToPropsType = {
  addPost: (title: string) => void;
  deletePost: (id: string) => void;
};

const mapStateToProps = (
  state: AppRootStateType,
): MapStateToPropsProfileType => {
  return {
    profilePost: state.profileReducer,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addPost: (title) => dispatch(addPostAC(title)),
    deletePost: (id) => dispatch(deletePostAC(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostContainer);
