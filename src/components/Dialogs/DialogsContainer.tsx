import * as React from "react";
import { DialogsPageType, MessageType } from "../../type";
import {
  CommonACType,
  sendMessageAC,
  setDataMessageAC,
  updateNewMessageTextAC,
} from "./dialogsReducer";
import { connect } from "react-redux";
import { AppRootStateType } from "../../app/store";
import { compose, Dispatch } from "redux";
import Dialogs from "./Dialogs";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

class DialogsContainer extends React.Component<DialogsType> {
  componentDidMount() {
    return this.props.setDataMessage();
  }

  changeTextArea = (title: string) => {
    return this.props.changeTextArea(title);
  };

  addPost = (title: string) => {
    return this.props.addPost(title);
  };

  render() {
    return (
      <Dialogs
        dialogPage={this.props.dialogsPage}
        isAuth={this.props.isAuth}
        newMessageText={this.props.newMessageText}
        messages={this.props.messages}
        changeTextArea={this.changeTextArea}
        addPost={this.addPost}
      />
    );
  }
}

let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    dialogsPage: state.dialogsReducer,
    isAuth: state.authReducer.isAuth,
    newMessageText: state.dialogsReducer.newMessageText,
    messages: state.dialogsReducer.message,
  };
};

type mapStateToPropsType = {
  dialogsPage: DialogsPageType;
  isAuth: boolean;
  newMessageText: string | "";
  messages: Array<MessageType>;
};

const mapDispatchToProps = (
  dispatch: Dispatch<CommonACType>,
): mapDispatchToPropsType => {
  return {
    addPost: (title: string) => dispatch(sendMessageAC(title)),
    changeTextArea: (title: string) => dispatch(updateNewMessageTextAC(title)),
    setDataMessage: () => dispatch(setDataMessageAC()),
  };
};

type mapDispatchToPropsType = {
  addPost: (title: string) => void;
  changeTextArea: (title: string) => void;
  setDataMessage: () => void;
};

type DialogsType = mapStateToPropsType & mapDispatchToPropsType;

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect,
)(DialogsContainer);
