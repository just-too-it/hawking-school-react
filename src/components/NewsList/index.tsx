import React, { FC, useEffect, useState } from "react";
import { INewsList } from "./NewsList.types";
import styles from './NewsList.module.scss'
import { NewsPreview } from "../NewsPreview";

export const NewsList: FC<INewsList> = ({newsPreviews, newsPerPage}) => {
    const [visibleNews, setVisibleNews] = useState(newsPreviews);

    useEffect(()=>{
        setVisibleNews(visibleNews.slice(0, newsPerPage))
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