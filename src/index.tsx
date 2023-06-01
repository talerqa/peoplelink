import React from 'react';
import './index.css';
import {
  StateType,
  store,

} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

let rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}



        // addPost={store.addPost.bind(store)}
        // updateNewPostText={store.updateNewPostText}
        // addMessage={store.addMessage}
        // updateMessageText={store.updateMessageText}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)