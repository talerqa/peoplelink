import * as React from 'react';
import {UsersType} from '../../redux/type';
import s from './Users.module.css';
import User from './User/User';
import axios from 'axios';

type UsersComponentPropsType = {
  users: UsersType[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: UsersType[]) => void
}

export class Users extends React.Component<UsersComponentPropsType> {
  constructor(props: UsersComponentPropsType) {
    super(props)
  }

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users', {withCredentials: true})
      .then((res) => {
        this.props.setUsers(res.data.items)
      })
  }


  render() {
    return (
      <div className={s.wrapper}>
        <div className={''}>
          <span className={s.selectedPage}>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
        </div>
        <p className={s.title}>Friends:</p>
        <div className={s.wrapper_item}>
          {this.props.users.map((user) => {
            return (
              <User
                key={user.id}
                user={user}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setUsers={this.props.setUsers}
              />
            )
          })}
        </div>

      </div>
    );
  }
}