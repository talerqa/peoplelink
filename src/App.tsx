import * as React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';
import {MyFrinedPageType,} from './redux/store';
import Friends from './components/Friends/Friends';
import {useSelector} from 'react-redux';
import {AppRootStateType} from './redux/storeWithRedux';
import Navbar from './components/Navbar/Navbar';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

// type AppPropsType = {
//   state: StateType
//   dispatch: (action: UpdateNewPostTextACType | AddPostACType | SendMessageACType | UpdateNewMessageTextACType) => void
// }

function App() {

  const sideBarPage = useSelector<AppRootStateType, MyFrinedPageType>(state => state.sidebarReducer)


  return (<div className="app-wrapper">
      <Header/>
      <Navbar state={sideBarPage}/>
      <div className={'content'}>
        <Route path={'/profile*/'} render={() => <Profile/>}/>
        <Route path={'/dialogs*/'} render={() => <DialogsContainer/>}/>
        <Route path={'/friends*/'}
               render={() => <Friends state={sideBarPage}/>}/>
        <Route path={'/music*/'} component={Music}/>
        <Route path={'/setting*/'} component={Setting}/>
        <Route path={'/news*/'} component={News}/>
      </div>
    </div>
  )
}

export default App;