import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let state = [
  {
    title: "header",
    name: 'lesha'
  },
  {
    title: "technologies",
    name: 'lenya'
  },
  {
    title: "footer",
    name: 'sasha'
  },
]

ReactDOM.render(
  <App state={state} />,
  document.getElementById('root')
);