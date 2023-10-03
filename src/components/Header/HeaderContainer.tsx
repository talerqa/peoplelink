import * as React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { AppRootStateType } from "../../app/store";
import {
  authThunkCreator,
  logOutThunkCreator,
  setUserDataAC,
} from "../Login/authReducer";

class HeaderContainer extends React.Component<AuthPropsType> {
  constructor(props: AuthPropsType) {
    super(props);
    this.state = {
      captcha: null,
    };
  }

  componentDidMount() {
    this.props.authThunkCreator();
  }

  logOutHandler = () => {
    this.props.logout();
    this.setState({ captcha: "" });
  };

  render() {
    return (
      <Header
        id={this.props.id}
        email={this.props.email}
        login={this.props.login}
        isAuth={this.props.isAuth}
        logout={this.logOutHandler}
      />
    );
  }
}

type MapStateToPropsAuthType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captcha: string | null;
};

type AuthPropsType = MapStateToPropsAuthType & MapDispatchToPropsAuthType;

const mapStateToProps = (state: AppRootStateType): MapStateToPropsAuthType => {
  return {
    id: state.authReducer.id,
    email: state.authReducer.email,
    login: state.authReducer.login,
    isAuth: state.authReducer.isAuth,
    captcha: state.authReducer.getCaptcha,
  };
};

type MapDispatchToPropsAuthType = {
  setUserData: (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captcha: null | string,
  ) => void;
  authThunkCreator: () => void;
  logout: () => void;
};

export default connect(mapStateToProps, {
  setUserData: setUserDataAC,
  authThunkCreator: authThunkCreator,
  logout: logOutThunkCreator,
})(HeaderContainer);
