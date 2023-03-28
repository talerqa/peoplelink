import React from 'react';
import './App.css';
import Header from './components/Header';
import Page from './components/Page';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <Page/>
    </div>)
}

export default App;