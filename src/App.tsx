import React from 'react';
import style from './App.module.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className={style.app_wrapper}>
      <Header/>
      <Navbar/>
      <Profile/>
    </div>)
}

export default App;