import * as React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {LoginContainer} from './components/Login/Login';

function App() {
  return (<div className="app-wrapper">
      <HeaderContainer/>
      <Navbar/>
      <div className={'content'}>
        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
        <Route path={'/dialogs*/'} render={() => <DialogsContainer/>}/>
        <Route path={'/users*/'} render={() => <UsersContainer/>}/>
        <Route path={'/music*/'} component={Music}/>
        <Route path={'/setting*/'} component={Setting}/>
        <Route path={'/news*/'} component={News}/>
        <Route path={'/login*/'} render={() => <LoginContainer/>}/>
      </div>
    </div>
  )
}

export default App;