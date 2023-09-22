import * as React from 'react';
import {useEffect, useState} from 'react';
import s from "./Paginator.module.scss";

type PaginatorType = {
  pageSize: number
  totalCount: number
  currentPage: number
  onPageChanged: (page: number) => void
}

export const Paginator = (props: PaginatorType) => {
  const {totalCount, pageSize, currentPage = 1, onPageChanged} = props
  const [portionNumber, serPortionNumber] = useState(1)
  let portionSize = 10

  useEffect(() => {
    return serPortionNumber(Math.ceil(currentPage / portionSize))
  }, [portionSize, currentPage]);


  let pagesCount = Math.ceil(totalCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pagesCount / portionSize)

  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize
  debugger

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
