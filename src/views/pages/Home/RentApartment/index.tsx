import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ApartmentList } from '../../../../components/ApartmentList';
import { Pagination } from '../../../../components/Pagination';
import { SButton } from '../../../../components/UI/SButton';
import { apartmentsList, apartmentsMinsk } from '../../../../core/mockData/mockData';
import { getPageCount } from '../../../../core/utils/getPageCount';
import { useNavPageCity } from '../../../../hooks/useNavPageCity';
import { apartmentListSlice } from '../../../../store/apartments/apartments.slice';
import { filterMinskSlice } from '../../../../store/filterMinsk/filterMinsk.slice';
import { newsSlice } from '../../../../store/news/news.slice';
import { RootState } from '../../../../store/store';
import { FilterMinsk } from '../FilterMinsk';

import styles from './RentApartment.module.scss';

export const RentApartment = () => {
  const { apartments, cardsPerPage, currentPage, isListMode } = useSelector(
    (state: RootState) => state.apartmentListReducer
  );
  const { setApartments, setCurrentPage } = apartmentListSlice.actions;
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            isListMode={isListMode}
            cardsPerPage={cardsPerPage}
            currentPage={currentPage}
          />
        )}
      </div>
      <div className={styles.pagination}>
      <Pagination
        currentPage={currentPage}
        totalPage={apartments ? getPageCount(apartments.length, cardsPerPage) : 1}
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
