import React from 'react';

import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { SInput } from '../../UI/SInput';
import { SButton } from '../../UI/SButton';
import { SSelector } from '../../UI/SSelector';
import { roomsList, citysList } from '../../../core/mockData/mockData';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterMainSlice } from '../../../store/filterMain/filterMain.slice';
import { useNavPageCity } from '../../../hooks/useNavPageCity';

import styles from './TabFormCity.module.scss';
import { RootState } from '../../../store/store';

export const TabFormCity = () => {
 const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setCity, setRooms, setPriceFrom, setPriceTo } = filterMainSlice.actions;
  const { city, rooms, priceFrom, priceTo } = useSelector((state: RootState) => state.filterMainReducer);

  const initialValues = {
    city: city,
    rooms: rooms,
    priceFrom: priceFrom,
    priceTo: priceTo,
  };

  const validationSchema: unknown = yup.object().shape({
    priceFrom: yup.number(),
    priceTo: yup.number(),
  });


  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          dispatch(setCity(values.city));
          dispatch(setRooms(values.rooms));
          dispatch(setPriceFrom(values.priceFrom));
          dispatch(setPriceTo(values.priceTo));
          useNavPageCity(values.city, navigate)
        }, 400);
      }}
      validationSchema={validationSchema}
    >
      {({ errors, handleSubmit, setFieldValue, isValid }) => (
        <Form className={styles.form}>
          <fieldset className={styles.fieldset}>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Город</div>
              <SSelector options={citysList} placeholder={city ? city : 'Выберите'} name={'city'} setValue={setFieldValue} />
            </div>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Комнаты</div>
              <SSelector options={roomsList} placeholder={rooms ? rooms : 'Выберите'} name={'rooms'} setValue={setFieldValue} />
            </div>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Цена за сутки (BYN)</div>
              <div className={styles.prices}>
                <SInput type="number" placeholder={'От'} name={'priceFrom'} /> -
                <SInput type="number" placeholder={'До'} name={'priceTo'} />
              </div>
            </div>
            <div className={styles.item}>
              <SButton
                type="button"
                label="Больше опций"
                view={'transparentOptions'}
                width={'122px'}
                btnOnClick={handleSubmit}
              />
            </div>
            <div className={styles.item}>
              <SButton
                type="button"
                label="На карте"
                view={'transparentMap'}
                width={'80px'}
                btnOnClick={handleSubmit}
              />
            </div>
            <div className={styles.button}>
              <SButton type="submit" label={'Показать'} view={'yellow'} btnOnClick={handleSubmit} width={'123px'} />
            </div>
          </fieldset>
        </Form>
      )}
    </Formik>
  );
};
