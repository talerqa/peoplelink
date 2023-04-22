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


type AppPropsType = {
  state: stateType
}

function App(props: AppPropsType) {
  return (<div className="app-wrapper">
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
          <Route path={'/profile*/'} render={() => <Profile state={props.state.profilePage}/>}/>
          <Route path={'/dialogs*/'} render={() => <Dialogs state={props.state.dialogsPage}/>}/>
          <Route path={'/music*/'} component={Music}/>
          <Route path={'/setting*/'} component={Setting}/>
          <Route path={'/news*/'} component={News}/>

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;