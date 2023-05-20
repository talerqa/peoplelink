import React, {useState} from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {myFriendsPageType} from '../../redux/state';

type NavbarPropsType = {
  state: myFriendsPageType
}

const Navbar = (props: NavbarPropsType) => {

  // const [show, setShow] = useState(false)
  // const showFriend = props.state.friends.map(f => {
  //   return (<div key={f.id}>
  //     <img style={{height: '50px', width: '50px', borderRadius: '20px', display: 'block'}} src={f.img}
  //          alt="avatar"/>
  //     <div>
  //       <a href="#">{f.name + ' ' + f.lastName}</a>
  //       <div></div>
  //     </div>
  //   </div>)
  // })

  const conditionChangeColorLink = (isActive: boolean) => isActive ? s.active + ' ' + s.link : s.link

  return (<div className={s.navbarWrapper}>
      <nav className={s.navbarMenu}>
        <ul className={s.navbarItems}>
          <li className={s.navbarItem}>
            <NavLink className={conditionChangeColorLink} to={'/profile'}>Profile</NavLink>
          </li>
          <li className={s.navbarItem}>
            <NavLink className={conditionChangeColorLink} to={'/dialogs'}>Dialogs</NavLink>
          </li>
          <li className={s.navbarItem}>
            <NavLink className={conditionChangeColorLink} to={'/music'}>Music</NavLink>
          </li>
          <li className={s.navbarItem}>
            <NavLink className={conditionChangeColorLink} to={'/setting'}>Setting</NavLink>
          </li>
          <li className={s.navbarItem}>
            <NavLink className={conditionChangeColorLink} to={'/news'}>News</NavLink>
          </li>
          <li className={s.navbarItem}>
            <NavLink className={conditionChangeColorLink} to={'/friends'}>Friends</NavLink>
          </li>
        </ul>


        {/*<div style={{display: 'flex', flexDirection: 'row'}}>*/}
        {/*  {show*/}
        {/*    ? showFriend*/}
        {/*    : <div></div>}*/}
        {/*</div>*/}


      </nav>
    </div>
  )
}

export default Navbar;
