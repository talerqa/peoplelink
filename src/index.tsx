import * as React from 'react';
import * as ReactDOM from 'react-dom'
import './index.css';
import {store} from './app/store'
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './app/App';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
        <App/>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);


