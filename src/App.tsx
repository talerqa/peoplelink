import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';
import {DialogsPageType, ProfilePageType, SideBarType, StateType,} from './redux/store';
import Friends from './components/Friends/Friends';
import {AddPostACType, UpdateNewPostTextACType} from './redux/profileReducer';
import {SendMessageACType, UpdateNewMessageTextACType} from './redux/dialogsReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './redux/storeWithRedux';
import Navbar from './components/Navbar/Navbar';

type AppPropsType = {
  state: StateType
  dispatch: (action: UpdateNewPostTextACType | AddPostACType | SendMessageACType | UpdateNewMessageTextACType) => void
}

function App() {
  const profilePage = useSelector<AppRootStateType, ProfilePageType>(state => state.profileReducer)
  const dialogsPage = useSelector<AppRootStateType, DialogsPageType>(state => state.dialogsReducer)
  const sideBarPage = useSelector<AppRootStateType, SideBarType>(state => state.sidebarReducer)
  const dispatch = useDispatch()

  return (<div className="app-wrapper">
      <Header/>
      <Navbar state={sideBarPage}/>
      <div className={'content'}>
        <Route path={'/profile*/'} render={() =>
          <Profile
            state={profilePage}
            dispatch={dispatch}
          />

        }/>
        <Route path={'/dialogs*/'} render={() =>
          <Dialogs
            state={dialogsPage}
            dispatch={dispatch}/>}
        />
      <Route path={'/friends*/'} render={() => {
          return <Friends state={sideBarPage}/>
        }
        }/>

        <Route path={'/music*/'} component={Music}/>
        <Route path={'/setting*/'} component={Setting}/>
        <Route path={'/news*/'} component={News}/>
      </div>
    </div>
  )
}

export default App;