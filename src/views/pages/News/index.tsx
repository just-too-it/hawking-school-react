import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { breadcrumbsForNews, news } from '../../../core/mockData/mockData';
import { Search } from '../../../components/Search';
import styles from './News.module.scss';
import { Pagination } from '../../../components/Pagination';
import { INewsPreview } from '../../../components/NewsPreview/NewsPreview.types';
import { NewsList } from '../../../components/NewsList';

export const News = () => {
  const [newsList, setNewsList] = useState(null as INewsPreview[]);

  //заготовка на использование поиска
  const fileredList = (array: INewsPreview[], query: string) => {
    return array.filter((item) => item.title.includes(query));
  };

  useMemo(() => {
    setNewsList(fileredList(news, 'Линия'));
  }, []);

  return (
    <main className="container">
      <section className={styles.news}>
        <Breadcrumbs breadcrumbs={breadcrumbsForNews} />
        <h1 className={styles.title}>Новости</h1>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.list}>{newsList ? <NewsList newsPreviews={newsList} newsPerPage={9} /> : null}</div>
        <Pagination currentPage={1} totalPage={10} />
      </section>
    </main>
  );
};
