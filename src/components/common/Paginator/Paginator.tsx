import * as React from "react";
import { useEffect, useState } from "react";
import s from "./Paginator.module.scss";
import cn from "classnames";

type PaginatorType = {
  pageSize: number;
  totalCount: number;
  currentPage: number;
  onPageChanged: (page: number) => void;
};

export const Paginator = (props: PaginatorType) => {
  const { totalCount, pageSize, currentPage = 1, onPageChanged } = props;
  const [portionNumber, serPortionNumber] = useState(1);
  let portionSize = 10;

  useEffect(() => {
    return serPortionNumber(Math.ceil(currentPage / portionSize));
  }, [portionSize, currentPage, totalCount]);

  let pagesCount = Math.ceil(totalCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.paginatorBlock}>
      <p className={s.title}>Friends:</p>
      <input type="text" value={currentPage} className={s.input} />
      <div className={s.buttons}>
        {portionNumber > 1 && (
          <button
            className={s.buttonPrev}
            onClick={() => {
              serPortionNumber(portionNumber - 1);
            }}
          >
            PREV{" "}
          </button>
        )}
        {portionCount > portionNumber && (
          <button
            className={s.buttonNext}
            onClick={() => {
              serPortionNumber(portionNumber + 1);
            }}
          >
            NEXT
          </button>
        )}
      </div>
      <div className={s.pages}>
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber,
          )
          .map((page, index) => {
            return (
              <span
                className={cn(s.page, {
                  [s.selectedPage]: currentPage === page,
                })}
                key={index}
                onClick={() => onPageChanged(page)}
              >
                {page}
              </span>
            );
          })}
      </div>
    </div>
  );
};
