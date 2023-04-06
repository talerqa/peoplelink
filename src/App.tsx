import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route,} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';


function App() {
  return (<div className="app-wrapper">
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
          <Route path={'/profile'} component={Profile}/>
          <Route path={'/dialogs'} component={Dialogs}/>
          <Route path={'/music'} component={Music}/>
          <Route path={'/setting'} component={Setting}/>
          <Route path={'/news'} component={News}/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;