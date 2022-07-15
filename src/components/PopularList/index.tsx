import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { PopularListProps } from './PopularList.types';

import styles from './PopularList.module.scss';

export const PopularList: FC<{ list: PopularListProps }> = (props) => {
  const { title, list, limit } = props.list;
  const [limitedList, setLimitedList] = useState(list);
  const [restList, setRestList] = useState(null);

  useEffect(() => {
    setLimitedList(limitedList.slice(0, limit));
  }, []);

  const addHandler = () => {
    setRestList(list.slice(limit, list.length));
  };

  return (
    <article className={styles.popularList}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {limitedList.map((item) => (
          <li key={item.label} className={styles.item}>
            <Link to={item.link} className={styles.link}>
              {item.label}
            </Link>
            {item.count && <span className={styles.count}>{item.count}</span>}
          </li>
        ))}
        {list.length > limitedList.length && (
          <li onClick={addHandler} className={clsx(styles.add, restList && styles.addDisabled)}>
            Еще
          </li>
        )}
        {restList &&
          restList.map((item) => (
            <li key={item.label} className={styles.item}>
              <Link to={item.link} className={styles.link}>
                {item.label}
              </Link>
              {item.count && <span className={styles.count}>{item.count}</span>}
            </li>
          ))}
      </ul>
    </article>
  );
};
