import React, { FC } from "react";
import { NewsListProps } from "./NewsList.types";
import styles from './NewsList.module.scss'
import { NewsPreview } from "../NewsPreview";

export const NewsList: FC<NewsListProps> = ({data, newsPerPage, currentPage}) => {

    const start: number = (currentPage - 1) * newsPerPage;
    const end: number = start + newsPerPage;
  
    const newsOnDisplay = data?.slice(start, end);

    return (
      <>
          <ul className={styles.list}>
          {newsOnDisplay.map((newsPreview) => (
            <li key={newsPreview.id} className={styles.item}>
              <NewsPreview news={newsPreview} />
            </li>
          ))}
        </ul>
      </>
      
    )
}
