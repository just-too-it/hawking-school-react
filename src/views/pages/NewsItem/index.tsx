import React, { useEffect } from 'react';
import styles from './NewsItem.module.scss';
import { FullNews } from 'components/FullNews';
import { breadcrumbsForNewsItem, news } from 'core/mockData/mockData';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { NewsList } from 'components/NewsList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { newsSlice } from 'store/news/news.slice';

export const NewsItem = () => {
  const { data } = useSelector((state: RootState) => state.newsReducer);
  const { setData } = newsSlice.actions;
  const dispatch = useDispatch();
  const NEWS_PER_PAGE = 3;

  useEffect(() => {
    dispatch(setData(news));
  }, []);

  return (
    <main className={styles.newsItem}>
      <div className={styles.container}>
        <div className={styles.breadcrumbs}>
          <Breadcrumbs breadcrumbs={breadcrumbsForNewsItem} />
        </div>
        <div className={styles.news}>
          <FullNews />
        </div>
      </div>
      <section className={styles.list}>
        <div className="container">
          <h2 className={styles.titleList}>Читайте также</h2>
          <NewsList data={data} newsPerPage={NEWS_PER_PAGE} currentPage={1} />
        </div>
      </section>
    </main>
  );
};
