import * as React from 'react';
import s from "./Paginator.module.css";

type PaginatorType = {
  pageSize: number
  totalCount: number
  currentPage: number
  onPageChanged: (page: number) => void
}


export const Paginator = (props: PaginatorType) => {
  const {    totalCount, pageSize, currentPage,
    onPageChanged  } = props

  let pagesCount = Math.ceil(totalCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      {pages.map(page => {
        return <span className={currentPage === page ? s.selectedPage : ''}
                     onClick={() => onPageChanged(page)}>{page}</span>
      })}        </div>
  );
};
