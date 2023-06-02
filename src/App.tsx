import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';
import {
    StateType,

} from './redux/state';
import Friends from './components/Friends/Friends';
import {AddPostACType, UpdateNewPostTextACType} from './redux/profileReducer';
import {SendMessageACType, UpdateNewMessageTextACType} from './redux/dialogsReducer';

type AppPropsType = {
  state: StateType
  dispatch: (action: UpdateNewPostTextACType | AddPostACType | SendMessageACType | UpdateNewMessageTextACType) => void

}
function App(props: AppPropsType) {

  return (<div className="app-wrapper">
      <Header/>
      <Navbar state={props.state.myFriendsPage}/>
      <div className={'content'}>
        <Route  path={'/profile*/'} render={() =>
          <Profile
            state={props.state.profilePage}
            dispatch={props.dispatch}
          />

        }/>
        <Route path={'/dialogs*/'} render={() =>
          <Dialogs
            state={props.state.dialogsPage}
            dispatch={props.dispatch}/>}
        />
        <Route path={'/friends*/'} render={() => <Friends state={props.state.myFriendsPage}/>}/>
        <Route path={'/music*/'} component={Music}/>
        <Route path={'/setting*/'} component={Setting}/>
        <Route path={'/news*/'} component={News}/>
      </div>
    </div>
  )
}

export default App;