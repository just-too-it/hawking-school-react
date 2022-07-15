import React from 'react';

import { PopularList } from '../../../../components/PopularList';
import { popularApartmentsList, popularDestinationsList, popularCottageList } from '../../../../core/mockData/mockData';

import styles from './PopularPages.module.scss';

export const PopularPages = () => {
  return (
    <section className={styles.popular}>
      <PopularList list={popularApartmentsList} />
      <PopularList list={popularCottageList} />
      <PopularList list={popularDestinationsList} />
    </section>
  );
};
