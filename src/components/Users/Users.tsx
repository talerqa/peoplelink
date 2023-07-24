import * as React from 'react';
import {UserType} from '../../redux/type';
import s from './Users.module.css';
import User from './User/User';
import Preloader from '../Preloader/Preloader';

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
  let pagesCount = Math.ceil(props.totalCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={s.wrapper}>
      <div className={''}>
        {pages.map(page => {

          return <span className={props.currentPage === page ? s.selectedPage : ''}
                       onClick={() => props.onPageChanged(page)}>{page}</span>
        })}
      </div>
      <p className={s.title}>Friends:</p>

      <div className={s.wrapper_item}>

        {props.isFetching
          ? <Preloader/>
          : props.users.map((user) => {
            return (<>

              <User
                key={user.id}
                user={user}
                follow={props.follow}
                unfollow={props.unfollow}
                setUsers={props.setUsers}
              />
              </>
            )
          })}
      </div>


    </div>
  );
}
