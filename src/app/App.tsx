import * as React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import News from '../components/News/News';
import Setting from '../components/Setting/Setting';
import Music from '../components/Music/Music';
import Navbar from '../components/Navbar/Navbar';
import DialogsContainer from '../components/Dialogs/DialogsContainer';
import UsersContainer from '../components/Users/UsersContainer';
import ProfileContainer from '../components/Profile/ProfileContainer';
import HeaderContainer from '../components/Header/HeaderContainer';
import {LoginContainer} from '../components/Login/Login';
import {AppRootStateType} from './store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {RequestStatusType} from './appReducer';
import Preloader from '../components/Preloader/Preloader';
import {authThunkCreator} from '../components/Login/authReducer';

class App extends React.Component<AppPropsType> {

  componentDidMount() {
    this.props.auth()


  }

  render() {
    if (!this.props.isInitialized) {
      return <div
        style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
        <Preloader/>
      </div>
    }

    return (<div className="app-wrapper">


      <HeaderContainer/>
      <Navbar/>

      <div className={'content'}>

        {/*МОДАЛЬНОЕ ОКНО С ОШИБКОЙ*/}
        <div className={this.props.error ? 'modal-wrap' : 'modal-wrap-hidden'}>
          {this.props.error}
        </div>
        {/*Написать ошибки при неправильных путях*/}
        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
        <Route path={'/dialogs*/'} render={() => <DialogsContainer/>}/>
        <Route path={'/users*/'} render={() => <UsersContainer/>}/>
        <Route path={'/music*/'} component={Music}/>
        <Route path={'/setting*/'} component={Setting}/>
        <Route path={'/news*/'} component={News}/>
        <Route path={'/login*/'} render={() => <LoginContainer/>}/>
      </div>

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
  auth: () => void
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
    auth: () => {
      dispatch(authThunkCreator())
    }
  }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
