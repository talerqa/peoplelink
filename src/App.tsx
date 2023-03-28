import React from 'react';
import './App.css';
import logo from './img/logo.png'
import avatar from './img/avatar.png'
// import Header from './Header';
// import Content from './Content';
// import Footer from './Footer';
// import Nav from './Nav';
//

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src={logo} alt="" className="logo"/>
        Header
      </header>
      <nav className="nav">
        <div>
          Profile
        </div>
        <div>
          Message
        </div>
      </nav>
      <div className="content">
        Main content
        <div>
          <img className='avatar' src={avatar} alt="avatar"/>
        </div>
        <div>
          description
        </div>
        <div>
          My post
          <div>
            New Post
          </div>
          <div>
            <div>
              Post 1
            </div>
            <div>
              Post 2
            </div>
            <div>
              Post 3
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default App;