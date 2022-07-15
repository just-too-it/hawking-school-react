import React from 'react';

import { Promo } from '../../../components/Promo';
import { Filter } from './Filter';
import { promoCards } from '../../../core/mockData/mockData';
import { PopularPages } from './PopularPages';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <main className="container">
      <div className={styles.filter}>
        <Filter />
      </div>
      <div className={styles.popular}>
        <Promo promoList={promoCards} />
        <PopularPages />
      </div>

      <section className={styles.rentApartment}></section>
      <section className={styles.services}></section>
      <article className={styles.description}></article>
      <section className={styles.newsList}></section>
    </main>
  );
};
