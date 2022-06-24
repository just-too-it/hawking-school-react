import React, { FC, useEffect, useState } from "react";
import { INewsList } from "./NewsList.types";
import styles from './NewsList.module.scss'
import { NewsPreview } from "../NewsPreview";

export const NewsList: FC<INewsList> = ({data, newsPerPage, currentPage}) => {
    const [visibleNews, setVisibleNews] = useState(data);

    const start = (currentPage - 1) * newsPerPage;
    const end = start + newsPerPage;
  
    //const cardsOnDisplay = props.data?.slice(start, end);


    useEffect(()=>{
        setVisibleNews(visibleNews?.slice(start, end))
    },[])
   
    return (
        <ul className={styles.list}>
        {visibleNews.map((news) => (
          <li key={news.id} className={styles.item}>
            <NewsPreview news={news} />
          </li>
        ))}
      </ul>
    )
}