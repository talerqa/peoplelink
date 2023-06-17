import * as React from 'react';
import './index.css';
import App from './App';
import {store} from './redux/storeWithRedux'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


