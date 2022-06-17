import React, { useState } from 'react';
import styles from './Search.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/images/icons/search.svg';

export const Search = () => {
  const [query, setQuery] = useState('');

  return (
    <article className={styles.search}>
      <div className={styles.wrapper}>
        <input
          type="text"
          className={styles.input}
          placeholder="Поиск по статьям"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={styles.button} onClick={() => console.log('фильтрация статей')}>
          <SearchIcon width={'17.07'} height={'17.07'} />
        </button>
      </div>
    </article>
  );
};
