import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type postData = {
  id: number
  message: string
  likesCount: number
}

const posts: Array<postData> = [
  {id: 1, message: 'Hi how are you', likesCount: 7},
  {id: 2, message: 'It\'s my first project', likesCount: 4},
  {id: 3, message: 'Its my second project', likesCount: 1},
]

export type dialogsDataType = {
  id: number
  name: string
}

const dialogsData: Array<dialogsDataType> = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrew'},
  {id: 3, name: 'Jhon'},
  {id: 4, name: 'Max'},
  {id: 5, name: 'Andrew'},
  {id: 6, name: 'Viktor'}
]

export type messageType = {
  id: number
  message: string
}

const message: Array<messageType> = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'Whatsup'},
  {id: 3, message: 'Hi everyone'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Hello'},]


ReactDOM.render(
  <App posts={posts} dialogsData={dialogsData} message={message}/>,
  document.getElementById('root')
);