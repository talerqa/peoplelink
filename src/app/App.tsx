import * as React from "react";
import s from "./App.module.scss";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { News } from "../components/News/News";
import { Setting } from "../components/Setting/Setting";
import { Music } from "../components/Music/Music";
import DialogsContainer from "../components/Dialogs/DialogsContainer";
import UsersContainer from "../components/Users/UsersContainer";
import ProfileContainer from "../components/Profile/ProfileContainer";
import { LoginContainer } from "../components/Login/Login";
import { AppRootStateType } from "./store";
import { compose, Dispatch } from "redux";
import { connect } from "react-redux";
import {
  closeAppErrorAC,
  initializeApp,
  RequestStatusType,
} from "./appReducer";
import Preloader from "../components/Preloader/Preloader";
import HeaderContainer from "../components/Header/HeaderContainer";
import { ErrorPage } from "../components/common/Error/ErrorPage/ErrorPage";

class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializedApp();
  }

  render() {
    if (!this.props.isInitialized) {
      return (
        <div className={s.preloader}>
          <Preloader />
        </div>
      );
    }

    return (
      <div className={s.app}>
        <HeaderContainer />
        <main className={s.main}>
          {/*<ErrorMessage*/}
          {/*  error={this.props.error}*/}
          {/*  closeErrorApp={this.props.closeErrorApp}*/}
          {/*/>*/}
          <div className={s.mainComponents}>
            <Switch>
              <Route exact path="/" render={() => <Redirect to={"/login"} />} />
              <Route path={"/login/"} render={() => <LoginContainer />} />
              <Route
                path={"/profile/:userId?"}
                render={() => <ProfileContainer />}
              />
              <Route path={"/dialogs/"} render={() => <DialogsContainer />} />
              <Route path={"/users/"} render={() => <UsersContainer />} />
              <Route path={"/music/"} component={Music} />
              <Route path={"/setting/"} component={Setting} />
              <Route path={"/news/"} component={News} />
              <Route path={"/error404"} render={() => <ErrorPage />} />
              <Route render={() => <Redirect to={"/error404"} />} />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

type AppPropsType = mapDispatchToPropsTye & mapStateToPropsType;

type mapStateToPropsType = {
  isAuth: boolean;
  status: RequestStatusType;
  isInitialized: boolean;
  error: string | null;
};

type mapDispatchToPropsTye = {
  initializedApp: () => void;
  closeErrorApp: () => void;
};

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    isAuth: state.authReducer.isAuth,
    status: state.appReducer.status,
    isInitialized: state.appReducer.isInitialized,
    error: state.appReducer.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsTye => {
  return {
    initializedApp: () => dispatch(initializeApp()),
    closeErrorApp: () => dispatch(closeAppErrorAC()),
  };
};
export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(App);
