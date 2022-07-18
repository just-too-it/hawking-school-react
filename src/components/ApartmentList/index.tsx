import React, { FC, useState, useEffect } from 'react';
import { ApartmentCard } from '../ApartmentCard';
import { ApartmentCardProps } from '../ApartmentCard/ApartmentCard.types';
import clsx from 'clsx';

import styles from './ApartmentList.module.scss';

export const ApartmentList: FC<{ apartments: ApartmentCardProps[]; isListMode: boolean }> = (props) => {
  const { apartments, isListMode } = props;
  const [listView, setListView] = useState(null);

  useEffect(() => {
    setListView(isListMode);
  }, [listView]);

  return (
    <ul className={clsx(styles.list, !isListMode && styles.tile)}>
      {apartments.map((apartment) => (
        <ApartmentCard apartment={apartment} isListMode={props.isListMode} key={apartment.id} />
      ))}
    </ul>
  );
};
