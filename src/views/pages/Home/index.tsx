import React from 'react';
import { Promo } from '../../../components/Promo';

import { Filter } from './Filter';

import styles from './Home.module.scss';
import { PagesLinks } from '../../../core/constants/pagesLinks.constant';
import { useNavigate } from 'react-router-dom';
import { promoCards } from '../../../core/mockData/mockData';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="container">
      <section className={styles.filter}>
        <Filter />
      </section>
      <section className={styles.promo}>
        <Promo promoList={promoCards} />
      </section>
      <section className={styles.quickLinks}></section>
      <section className={styles.rentApartment}></section>
      <section className={styles.services}></section>
      <article className={styles.description}></article>
      <section className={styles.newsList}></section>
    </main>
  );
};
