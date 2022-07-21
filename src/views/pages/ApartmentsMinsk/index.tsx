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

import styles from './ApartmentsMinsk.module.scss';

export const ApartmentsMinsk = () => {
  const { apartments, cardsPerPage, currentPage, recommendations } = useSelector(
    (state: RootState) => state.apartmentsMinskReducer
  );
  const { setApartments, setCurrentPage, setRecommendations } = apartmentsMinskSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApartments(apartmentsMinsk));
    dispatch(setRecommendations(recommendationsMinsk));
  }, []);

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

        <section>
          <div className={styles.list}>
            {apartments && (
              <ApartmentList apartments={apartments} cardsPerPage={cardsPerPage} currentPage={currentPage} />
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
