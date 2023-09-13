import * as React from 'react';
import s from './App.module.scss';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import News from '../components/News/News';
import Setting from '../components/Setting/Setting';
import Music from '../components/Music/Music';
import Navbar from '../components/Navbar/Navbar';
import DialogsContainer from '../components/Dialogs/DialogsContainer';
import UsersContainer from '../components/Users/UsersContainer';
import ProfileContainer from '../components/Profile/ProfileContainer';
import {LoginContainer} from '../components/Login/Login';
import {AppRootStateType} from './store';
import {compose, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {initializeApp, RequestStatusType} from './appReducer';
import Preloader from '../components/Preloader/Preloader';
import Error from "../components/Error";
import HeaderContainer from "../components/Header/HeaderContainer";
import Footer from "../components/Footer/Footer";

class App extends React.Component<AppPropsType> {

  componentDidMount() {
    this.props.initializedApp()
  }

  render() {
    if (!this.props.isInitialized) {
      return <div
        style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
        <Preloader/>
      </div>
    }

    return (<div className={s.app}>
      {this.props.isAuth && <HeaderContainer/>}
      <main className={s.main}>
        {/*/////ERRRRORR*/}
        <div className={s.navbar}>
          {this.props.isAuth && <Navbar/>}
        </div>
        <div className={this.props.error ? s.modalWrap : s.modalHidden}>
          {/*<div className={s.modalWrap}>*/}
          {this.props.error}11111111111
        </div>
        {/*Написать ошибки при неправильных путях*/}
        <div className={s.mainComponents}>
          <Switch>
            <Route exact path='/' render={() => <Redirect to={'/login'}/>}/>
            <Route path={'/login/'} render={() => <LoginContainer/>}/>
            <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
            <Route path={'/dialogs/'} render={() => <DialogsContainer/>}/>
            <Route path={'/users/'} render={() => <UsersContainer/>}/>
            <Route path={'/music/'} component={Music}/>
            <Route path={'/setting/'} component={Setting}/>
            <Route path={'/news/'} component={News}/>
            <Route path={'/error404'} render={() => <Error/>}/>
            <Route render={() => <Redirect to={'/error404'}/>}/>
          </Switch>
        </div>
      </main>
      <Footer/>
    </div>)
  }
}

type AppPropsType = mapDispatchToPropsTye & mapStateToPropsType

type mapStateToPropsType = {
  isAuth: boolean
  status: RequestStatusType
  isInitialized: boolean
  error: string | null
}

type mapDispatchToPropsTye = {
  initializedApp: () => void
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    isAuth: state.authReducer.isAuth,
    status: state.appReducer.status,
    isInitialized: state.appReducer.isInitialized,
    error: state.appReducer.error,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsTye => {
  return {
    initializedApp: () => {
      dispatch(initializeApp())
    }
  }
}

export default compose<React.ComponentType> (
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App)

