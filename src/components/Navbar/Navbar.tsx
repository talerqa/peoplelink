import React, {useState} from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {myFriendsPageType} from '../../redux/state';

type NavbarPropsType = {
  state: myFriendsPageType
}

const Navbar = (props: NavbarPropsType) => {

  const [show, setShow] = useState(false)
  const showFriend = props.state.friends.map(f => {
    return (<div key={f.id}>
      <img style={{height: '50px', width: '50px', borderRadius: '20px', display: 'block'}} src={f.img}
           alt="avatar"/>
      <div>
        <a href="#">{f.name + ' ' + f.lastName}</a>
        <div></div>
      </div>
    </div>)})

  return (
    <nav className={s.navbar}>
      <div>
        <NavLink className={isActive => isActive ? s.active : s.link} to={'/profile'}>Profile</NavLink>
      </div>
      <div>
        <NavLink className={isActive => isActive ? s.active : s.link} to={'/dialogs'}>Dialogs</NavLink>
      </div>
      <div>
        <NavLink className={isActive => isActive ? s.active : s.link} to={'/music'}>Music</NavLink>
      </div>
      <div>
        <NavLink className={isActive => isActive ? s.active : s.link} to={'/setting'}>Setting</NavLink>
      </div>
      <div>
        <NavLink className={isActive => isActive ? s.active : s.link} to={'/news'}>News</NavLink>
      </div>
      <div onClick={() => {
        setShow(!show)

      }}>
        <NavLink className={isActive => isActive ? s.active : s.link} to={'/friends'}>Friends</NavLink>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          {show
            ? showFriend
            : <div></div>}
        </div>


      </div>
    </nav>
  )
}

export default Navbar;
