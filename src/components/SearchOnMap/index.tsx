import React, { FC } from 'react';

import { SButton } from '../UI/SButton';
import { SearchOnMapProps } from './SearchOnMap.types';

import styles from './SearchOnMap.module.scss';

export const SearchOnMap: FC<SearchOnMapProps> = ({ title, description, height, btn }) => {
  return (
    <section className={styles.map} style={{ height: height }}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <SButton label={btn.label} btnOnClick={btn.btnOnClick} view={'whiteMap'} />
      </div>
    </section>
  );
};
