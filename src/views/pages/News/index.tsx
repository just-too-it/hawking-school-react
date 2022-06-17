import React, {useState, useMemo} from 'react';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { breadcrumbsForNews, news } from '../../../core/mockData/mockData';
import { Search } from '../../../components/Search';
import styles from './News.module.scss';
import { Pagination } from '../../../components/Pagination';
import { INewsPreview } from '../../../components/NewsPreview/NewsPreview.types';
import { NewsList } from '../../../components/NewsList';

export const News = () => {
  const [newsList, setNewsList] = useState([] as INewsPreview[])

  //заготовка на использование поиска
  const fileredList = (array: INewsPreview[], query:string)=> {
    return array.filter(item => item.title.includes(query))
  }

  useMemo(()=>{
    setNewsList(fileredList(news, '8'))
  },[])

  return (
    <section className={styles.news}>
      <Breadcrumbs breadcrumbs={breadcrumbsForNews} />
      <h1 className={styles.title}>Новости</h1>
      <div className={styles.search}>
        <Search />
      </div>
      {newsList ? <NewsList newsPreviews={newsList} newsPerPage={9}/> : null}
      <Pagination currentPage={1} totalPage={10}/>
    </section>
  );
};
