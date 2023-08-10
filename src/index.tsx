import * as React from 'react';
import * as ReactDOM from 'react-dom'
import './index.css';
import {store} from './app/store'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './app/App';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


