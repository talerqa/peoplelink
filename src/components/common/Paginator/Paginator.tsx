import * as React from 'react';
import {useEffect, useState} from 'react';
import s from "./Paginator.module.css";

type PaginatorType = {
  pageSize: number
  totalCount: number
  currentPage: number
  onPageChanged: (page: number) => void
}


export const Paginator = (props: PaginatorType) => {
  const {totalCount, pageSize, currentPage, onPageChanged} = props

  let portionSize = 10

  let pagesCount = Math.ceil(totalCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, serPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  useEffect(() => serPortionNumber(Math.ceil(currentPage / portionSize)), [currentPage]);

  return (
    <div>
      <input type="text" value={currentPage}/>
      {portionNumber > 1 && <button onClick={() => {
        serPortionNumber(portionNumber - 1)
      }}>PREV </button>}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((page, index) => {

          return <span className={currentPage === page ? s.selectedPage : ''}
                       key={index}
                       onClick={() => onPageChanged(page)}>{page}</span>
        })}
      {portionCount > portionNumber && <button onClick={() => {
        serPortionNumber(portionNumber + 1)
      }}>NEXT
      </button>}
    </div>
  );
};
