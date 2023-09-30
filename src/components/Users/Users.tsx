import * as React from 'react';
import {UserType} from '../../type';
import s from './Users.module.scss';
import User from './User/User';
import Preloader from '../Preloader/Preloader';
import {Paginator} from "../common/Paginator/Paginator";

type UsersComponentPropsType = {
  users: UserType[]
  pageSize: number
  totalCount: number
  currentPage: number
  onPageChanged: (page: number) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: UserType[]) => void
  isFetching: boolean
}
export const Users = (props: UsersComponentPropsType) => {

  const {
    totalCount, pageSize, currentPage,
    onPageChanged, users, isFetching, follow,
    unfollow, setUsers
  } = props

  return (
    <div className={s.usersBlock}>
      <Paginator totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged}/>
      <div className={s.wrapper_item}>
        {isFetching
          ? <Preloader/>
          : users.map((user) => {
            return (<User
                key={user.id}
                user={user}
                follow={follow}
                unfollow={unfollow}
                setUsers={setUsers}
              />
            )
          })}
      </div>


    </div>
  );
}
