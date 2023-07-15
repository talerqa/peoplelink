import * as React from 'react';
import * as ReactDOM from "react-dom"
import './index.css';
import App from './App';
import {store} from './redux/store'
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
        <App/>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);


