import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MONTHS } from '../../core/constants/months.constant';
import { socialShare } from '../../core/constants/social.constant';
import { newsItems } from '../../core/mockData/mockData';
import { INewsItem } from '../../views/pages/NewsItem/NewsItem.types';
import { Social } from '../Social';
import styles from './FullNews.module.scss';

export const FullNews = () => {
  const [news, setNews] = useState({} as INewsItem);
  const idNews = useParams();

  const getItemFromNews = (id: number, array: INewsItem[]) => {
    return array.find((item) => item.id === id);
  };

  useEffect(() => {
    setNews(getItemFromNews(Number(idNews.id), newsItems));
  }, []);

  return (
    <>
          <h1 className={styles.title}>{news.title}</h1>
          <div className={styles.subtitle}>
            {news.date ? (
                <span className={styles.date}>
                {news.date.getDate()} {MONTHS[news.date.getMonth()]} {news.date.getFullYear()}
                </span>
            ) : null}
            <Social socialBlock={socialShare} />
          </div>
          <div className={styles.img}>
          <img src={news.img} alt={news.title} width={'844'} height={'auto'}/>
          </div>
          
          <div className={styles.text} dangerouslySetInnerHTML={{ __html: news.text} }></div>
    </>
  );
};
