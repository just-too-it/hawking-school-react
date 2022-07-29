import React, { FC, useState, useEffect } from 'react';
import { ApartmentCard } from '../ApartmentCard';
import { ApartmentCardProps } from '../ApartmentCard/ApartmentCard.types';
import clsx from 'clsx';

import styles from './ApartmentList.module.scss';
import { ApartmentListProps } from './ApartmentListProps.types';
import { SSwiper } from '../UI/SSwiper';

export const ApartmentList: FC<ApartmentListProps> = ({apartments, isListMode=true, cardsPerPage, currentPage}) => {
  const [listView, setListView] = useState(null);

  const start: number = (currentPage - 1) * cardsPerPage;
  const end: number = start + cardsPerPage;

  const apartmentsOnDisplay = apartments?.slice(start, end);

  useEffect(() => {
    setListView(isListMode);
  }, [listView]);

  return (
    <ul className={clsx(styles.list, !isListMode && styles.tile)}>
      {apartmentsOnDisplay.map((apartment) => (
        <ApartmentCard apartment={apartment} isListMode={isListMode} key={apartment.id} />
      ))}
    </ul>
  );
};
