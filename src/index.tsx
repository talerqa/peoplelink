import React from 'react';
import './index.css';
import {addMessage, addPost, state, StateType, subscribe, updateMessageText, updateNewPostText} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

let rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateMessageText={updateMessageText}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)