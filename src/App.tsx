import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';
import {stateType} from './redux/state';
import Friends from './components/Friends/Friends';

type AppPropsType = {
  state: stateType
  addPost: (title: string) => void
}

function App(props: AppPropsType) {

  return (<div className="app-wrapper">
      <BrowserRouter>
        <Header/>
        <Navbar state={props.state.myFriendsPage} />
        <div className={'app-wrapper-content'}>
          <Route path={'/profile*/'} render={() => <Profile state={props.state.profilePage}/>}/>
          <Route path={'/dialogs*/'} render={() => <Dialogs state={props.state.dialogsPage} addPost={props.addPost}/>}/>
          <Route path={'/friends*/'} render={() => <Friends state={props.state.myFriendsPage}/>}/>
          <Route path={'/music*/'} component={Music}/>
          <Route path={'/setting*/'} component={Setting}/>
          <Route path={'/news*/'} component={News}/>

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;