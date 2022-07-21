import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ApartmentList } from '../../../../components/ApartmentList';
import { Pagination } from '../../../../components/Pagination';
import { SButton } from '../../../../components/UI/SButton';
import { apartmentsMinsk } from '../../../../core/mockData/mockData';
import { getPageCount } from '../../../../core/utils/getPageCount';
import { useNavPageCity } from '../../../../hooks/useNavPageCity';
import { apartmentsMinskSlice } from '../../../../store/apartments/apartmentsMinsk.slice';
import { RootState } from '../../../../store/store';
import { FilterMinsk } from '../FilterMinsk';

import styles from './RentApartment.module.scss';

export const RentApartment = () => {
  const { apartments, currentPage } = useSelector(
    (state: RootState) => state.apartmentsMinskReducer
  );
  const { setApartments, setCurrentPage } = apartmentsMinskSlice.actions;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const CARDS_PER_PAGE_HOME = 3;

  useEffect(() => {
    dispatch(setApartments(apartmentsMinsk));
  }, []);

  return (
    <section className={styles.rent}>
      <div className={styles.subTitle}>Квартиры на сутки</div>
      <h2 className={styles.title}>Аренда квартир в Минске</h2>
      <div className={styles.filter}>
        <FilterMinsk />
      </div>
      <div className={styles.apartments}>
        {apartments && (
          <ApartmentList
            apartments={apartments}
            cardsPerPage={CARDS_PER_PAGE_HOME}
            currentPage={currentPage}
          />
        )}
      </div>
      <div className={styles.pagination}>
      <Pagination
        currentPage={currentPage}
        totalPage={apartments ? getPageCount(apartments.length, CARDS_PER_PAGE_HOME) : 1}
        action={setCurrentPage}
      />
      </div>
      
      <div className={styles.offers}>
        <div>
          <div className={styles.count}>
            {apartmentsMinsk.length} <span>+</span>
          </div>
          <div className={styles.description}>Предложений по Минску</div>
        </div>
        <div className={styles.button}>
          <SButton
            type="button"
            label={'Посмотреть все'}
            btnOnClick={() => useNavPageCity('Минск', navigate)}
            view={'cobaltArrow'}
          />
        </div>
      </div>
    </section>
  );
};
