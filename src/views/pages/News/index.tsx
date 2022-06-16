import React from 'react';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { NewsPreview } from '../../../components/NewsPreview';
import { breadcrumbsForNews, news } from '../../../core/mockData/mockData';
import { Search } from '../../../components/Search';
import styles from './News.module.scss';

export const News = () => {
  return (
    <section className={styles.news}>
      <Breadcrumbs breadcrumbs={breadcrumbsForNews} />
      <h1 className={styles.title}>Новости</h1>
      <div className={styles.search}>
        <Search />
      </div>
      <ul className={styles.list}>
        {news.map((news) => (
          <li key={news.id} className={styles.item}>
            <NewsPreview news={news} />
          </li>
        ))}
      </ul>
    </section>
  );
};
