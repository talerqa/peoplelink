import * as React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App() {
  return (<div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className={'content'}>
        <Route path={'/profile*/'} render={() => <Profile/>}/>
        <Route path={'/dialogs*/'} render={() => <DialogsContainer/>}/>
        <Route path={'/users*/'}
               render={() => <UsersContainer/>}/>
        <Route path={'/music*/'} component={Music}/>
        <Route path={'/setting*/'} component={Setting}/>
        <Route path={'/news*/'} component={News}/>
      </div>
    </div>
  )
}

export default App;