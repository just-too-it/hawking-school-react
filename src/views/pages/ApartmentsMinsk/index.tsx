import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

import { ApartmentList } from '../../../components/ApartmentList';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { Pagination } from '../../../components/Pagination';
import { breadcrumbsForApartmentsMinsk, apartmentsMinsk, recommendationsMinsk } from '../../../core/mockData/mockData';
import { getPageCount } from '../../../core/utils/getPageCount';
import { apartmentsMinskSlice } from '../../../store/apartments/apartmentsMinsk.slice';
import { Recommendations } from './Recommendations';
import { ApartmentsForm } from '../../../components/ApartmentsForm';

import styles from './ApartmentsMinsk.module.scss';

export const ApartmentsMinsk = () => {
  const {
    apartments,
    cardsPerPage,
    currentPage,
    recommendations,
    metro,
    district,
    rooms,
    priceFrom,
    priceTo,
    peopleCount, options
  } = useSelector((state: RootState) => state.apartmentsMinskReducer);
  const { setApartments, setCurrentPage, setRecommendations } = apartmentsMinskSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApartments(apartmentsMinsk));
    dispatch(setRecommendations(recommendationsMinsk));
  }, []);

  useEffect(() => {
    let filteredApartments = apartmentsMinsk;

    if (rooms && rooms !== '') {
      filteredApartments = filteredApartments.filter((apart) => apart.rooms.toLowerCase() == rooms.toLowerCase());
    }
    if (priceFrom) {
      filteredApartments = filteredApartments.filter((apart) => Number(apart.price) >= Number(priceFrom));
    }
    if (priceTo) {
      filteredApartments = filteredApartments.filter((apart) => Number(apart.price) <= Number(priceTo));
    }
    if (peopleCount && peopleCount !== '') {
      filteredApartments = filteredApartments.filter((apart) => Number(apart.peopleCount) == Number(peopleCount));
    }
    if (district && district !== '') {
      filteredApartments = filteredApartments.filter(
        (apart) => apart.address.district.toLowerCase() == district.toLowerCase()
      );
    }
    if (metro && metro !== '') {
      filteredApartments = filteredApartments.filter(
        (apart) => apart.address.metro.toLowerCase() == metro.toLowerCase()
      );
    }
    if (options && options.length !== 0) {
      filteredApartments = filteredApartments.filter(
        (apart) => options.some((item) => apart.options.includes(item))
      );
    }
    
    dispatch(setApartments(filteredApartments));
  }, [metro, district, rooms, priceFrom, priceTo, peopleCount, options]);

  return (
    <main className={styles.apartments}>
      <div className="container">
        <div className={styles.top}>
          <Breadcrumbs breadcrumbs={breadcrumbsForApartmentsMinsk} />
          <h1 className={styles.title}>Аренда квартир на сутки в Минске</h1>
          <div className={styles.recommendations}>
            <Recommendations recommendations={recommendations} />
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <ApartmentsForm />
      </div>
      <div className="container">
        <section>
          <div className={styles.list}>
            {apartments && (
              <ApartmentList apartments={apartments} isListMode={false} cardsPerPage={cardsPerPage} currentPage={currentPage} />
            )}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPage={apartments ? getPageCount(apartments.length, cardsPerPage) : 1}
            action={setCurrentPage}
          />
        </section>
      </div>
    </main>
  );
};
