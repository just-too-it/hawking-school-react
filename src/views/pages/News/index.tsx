import React from 'react';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { NewsPreview } from '../../../components/NewsPreview';
import { breadcrumbsForNews, news } from '../../../core/mockData/mockData';

export const News = () => {

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsForNews}/>
      <h1 className="news__title">Новости</h1>
      <ul className="news__list">
        {news.map(news => 
        <li key={news.id}>
          <NewsPreview news={news}/>
        </li>)}
      </ul>
      
    </>
  )
}
