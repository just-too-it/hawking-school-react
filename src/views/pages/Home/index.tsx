import React from 'react';

import { Promo } from '../../../components/Promo';
import { Filter } from './Filter';
import { apartmentsList, promoCards } from '../../../core/mockData/mockData';
import { PopularPages } from './PopularPages';


import styles from './Home.module.scss';
import { ApartmentList } from '../../../components/ApartmentList';
import { FilterMinsk } from './FilterMinsk';
import { RentApartment } from './RentApartment';
import { SearchOnMap } from '../../../components/SearchOnMap';
import { PagesLinks } from '../../../core/constants/pagesLinks.constant';
import { useNavigate } from 'react-router-dom';
import { ServiceCard } from '../../../components/ServiceCard';
import { Services } from './Services';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="container">
        <div className={styles.filter}>
          <Filter />
        </div>
        <div className={styles.popular}>
          <Promo promoList={promoCards} />
          <PopularPages />
        </div>
        <div className={styles.rentApartment}>
          <RentApartment />
        </div>
      </div>
      <div className={styles.map}>
        <SearchOnMap
          title={'Поиск квартир на карте'}
          description={'Ищите квартиры на сутки в центре города, возле парка или в живописном районе'}
          btn={{ label: 'Открыть карту', btnOnClick: () => navigate(PagesLinks.MAPS_PAGE) }}
          height={'440px'}
        />
      </div>
      <div className="container">
        <section className={styles.services}>
          <Services />
        </section>
        <article className={styles.description}></article>
        <section className={styles.newsList}></section>
      </div>
      
    </main>
  );
};
