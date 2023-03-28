import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <Profile/>
    </div>)
}

export default App;