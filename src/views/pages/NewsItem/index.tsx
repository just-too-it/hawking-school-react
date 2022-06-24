import React, { useState, useMemo } from 'react';
import styles from './NewsItem.module.scss';
import { FullNews } from '../../../components/FullNews';
import { breadcrumbsForNewsItem, news } from '../../../core/mockData/mockData';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { INewsPreview } from '../../../components/NewsPreview/NewsPreview.types';
import { NewsList } from '../../../components/NewsList';

export const NewsItem = () => {
  const [newsList, setNewsList] = useState([] as INewsPreview[])

  useMemo(()=>{
    setNewsList(news)
  },[newsList])



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
        <div className='container'>
          <h2 className={styles.titleList}>Читайте также</h2>
          <NewsList data={newsList} newsPerPage={3} currentPage={1}/>
        </div>
      </section>
      
    </main>
  );
};
