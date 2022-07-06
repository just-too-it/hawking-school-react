import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { newsSlice } from '../../store/news/news.slice';
import styles from './Pagination.module.scss';
import { PaginationProps } from './Pagination.types';


export const Pagination: FC<PaginationProps>=({currentPage, totalPage}) => {
  const dispatch = useDispatch();
  const { setCurrentPage } = newsSlice.actions

  const items: number[] = [];
  for (let index = 0; index < totalPage; index++) {
    items.push(index + 1);
  }

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li
          key={item}
          className={item == currentPage ? `${styles.item} ${styles.item_current}` : styles.item}
          onClick={() => {
            dispatch(setCurrentPage(item))
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
