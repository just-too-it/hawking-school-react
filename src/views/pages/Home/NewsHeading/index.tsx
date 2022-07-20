import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NewsHeadlines } from '../../../../components/NewsHeadlines';
import { SButton } from '../../../../components/UI/SButton';
import { PagesLinks } from '../../../../core/constants/pagesLinks.constant';
import { news } from '../../../../core/mockData/mockData';
import { newsSlice } from '../../../../store/news/news.slice';
import { RootState } from '../../../../store/store';

import styles from './NewsHeading.module.scss';

export const NewsHeading = () => {
  const { data } = useSelector((state: RootState) => state.newsReducer);
  const { setData } = newsSlice.actions;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const NEWS_PER_PAGE = 5;

  useEffect(() => {
    dispatch(setData(news));
  }, []);

  return (
    <article className={styles.news}>
      <h2 className={styles.title}>Новости</h2>
      <NewsHeadlines data={data} newsPerPage={NEWS_PER_PAGE} />
      <SButton label="Посмотреть все" btnOnClick={() => navigate(PagesLinks.NEWS_PAGE)} view="transparentCobaltArrow" />
    </article>
  );
};
