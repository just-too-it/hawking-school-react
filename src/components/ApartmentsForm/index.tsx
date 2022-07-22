import React, { useEffect, useState } from 'react';

import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { SInput } from '../UI/SInput';
import { SButton } from '../UI/SButton';
import { SSelector } from '../UI/SSelector';
import { roomsList, citysList } from '../../core/mockData/mockData';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterMainSlice } from '../../store/filterMain/filterMain.slice';
import { useNavPageCity } from '../../hooks/useNavPageCity';

import styles from './ApartmentsForm.module.scss';
import { RootState } from '../../store/store';
import { apartmentsMinskSlice } from '../../store/apartments/apartmentsMinsk.slice';
import { PagesLinks } from '../../core/constants/pagesLinks.constant';
import { FilterMainProps } from '../../store/filterMain/filterMain.types';
import { ApartmentsMinskProps } from '../../views/pages/ApartmentsMinsk/ApartmentsMinsk.types';
import clsx from 'clsx';

export const ApartmentsForm = () => {
  const location = useLocation();
  const [viewForm, setViewForm] = useState<string>('');
  const [initialValues, setInitialValues] = useState<FilterMainProps | ApartmentsMinskProps>();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    setCity,
    setRooms: setRoomsMain,
    setPriceFrom: setPriceFromMain,
    setPriceTo: setPriceToMain,
  } = filterMainSlice.actions;

  const {
    setRooms: setRoomsMinsk,
    setPriceFrom: setPriceFromMinsk,
    setPriceTo: setPriceToMinsk,
  } = apartmentsMinskSlice.actions;

  const {
    city: cityHome,
    rooms: roomsHome,
    priceFrom: priceFromHome,
    priceTo: priceToHome,
  } = useSelector((state: RootState) => state.filterMainReducer);
  const {
    city: cityMinsk,
    rooms: roomsMinsk,
    priceFrom: priceFromMinsk,
    priceTo: priceToMinsk,
  } = useSelector((state: RootState) => state.apartmentsMinskReducer);

  const initialValuesHome = {
    city: cityHome,
    rooms: roomsHome,
    priceFrom: priceFromHome,
    priceTo: priceToHome,
  };

  const initialValuesMinsk = {
    city: cityMinsk,
    rooms: roomsMinsk,
    priceFrom: priceFromMinsk,
    priceTo: priceToMinsk,
  };

  const validationSchema: unknown = yup.object().shape({
    priceFrom: yup.number(),
    priceTo: yup.number(),
  });

  useEffect(() => {
    switch (location.pathname) {
      case PagesLinks.MAIN_PAGE:
        setViewForm('Home');
        setInitialValues(initialValuesHome);
        break;
      case PagesLinks.APARTMENTS_MINSK_PAGE:
        setViewForm('Minsk');
        setInitialValues(initialValuesMinsk);
        break;
      default:
        setViewForm('Home');
        setInitialValues(initialValuesHome);
        break;
    }
  }, [viewForm]);

  return (
    <>
      {initialValues && (
        <Formik
          initialValues={initialValues}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);

              switch (viewForm) {
                case 'Home':
                  values.city && dispatch(setCity(values.city));
                  dispatch(setRoomsMain(values.rooms));
                  dispatch(setPriceFromMain(values.priceFrom));
                  dispatch(setPriceToMain(values.priceTo));

                  if (values.city === 'Минск') {
                    dispatch(setRoomsMinsk(values.rooms));
                    dispatch(setPriceFromMinsk(values.priceFrom));
                    dispatch(setPriceToMinsk(values.priceTo));
                  }
                  useNavPageCity(values.city, navigate);
                  break;
                case 'Minsk':
                  dispatch(setRoomsMinsk(values.rooms));
                  dispatch(setPriceFromMinsk(values.priceFrom));
                  dispatch(setPriceToMinsk(values.priceTo));
                  console.log('Фильтрация квартир в Минске');
                  break;
                default:
                  break;
              }
            }, 400);
          }}
          validationSchema={validationSchema}
        >
          {({ errors, handleSubmit, setFieldValue, isValid, resetForm }) => (
            <Form className={styles.form}>
              <fieldset className={styles.fieldset}>
                {viewForm == 'Home' && (
                  <div className={styles.item}>
                    <div className={styles.itemTitle}>Город</div>
                    <SSelector
                      options={citysList}
                      placeholder={initialValues.city ? initialValues.city : 'Выберите'}
                      name={'city'}
                      setValue={setFieldValue}
                    />
                  </div>
                )}
                <div className={clsx(styles.item, viewForm == 'Minsk' && styles.itemCity)}>
                  <div className={styles.itemTitle}>Комнаты</div>
                  <SSelector
                    options={roomsList}
                    placeholder={initialValues.rooms ? initialValues.rooms : 'Выберите'}
                    name={'rooms'}
                    setValue={setFieldValue}
                  />
                </div>
                <div className={clsx(styles.item, viewForm == 'Minsk' && styles.itemCity)}>
                  <div className={styles.itemTitle}>Цена за сутки (BYN)</div>
                  <div className={styles.prices}>
                    <SInput type="number" placeholder={'От'} name={'priceFrom'} /> -
                    <SInput type="number" placeholder={'До'} name={'priceTo'} />
                  </div>
                </div>
                <div className={clsx(styles.item, viewForm == 'Minsk' && styles.itemCity)}>
                  <SButton
                    type="button"
                    label="Больше опций"
                    view={'transparentOptions'}
                    width={'128px'}
                    btnOnClick={handleSubmit}
                  />
                </div>
                {viewForm !== 'Home' && (
                  <div className={clsx(styles.item, viewForm == 'Minsk' && styles.itemCity)}>
                    <SButton type="reset" label="Очистить" view={'clear'} width={'100px'} btnOnClick={resetForm} />
                  </div>
                )}
                {viewForm == 'Home' && (
                  <div className={clsx(styles.item)}>
                    <SButton
                      type="button"
                      label="На карте"
                      view={'transparentMap'}
                      width={'80px'}
                      btnOnClick={handleSubmit}
                    />
                  </div>
                )}
                <div className={styles.button}>
                  {viewForm == 'Home' && (
                    <SButton
                      type="submit"
                      label={'Показать'}
                      view={'yellowArrow'}
                      btnOnClick={handleSubmit}
                      width={'123px'}
                    />
                  )}
                  {viewForm == 'Minsk' && (
                    <SButton
                      type="submit"
                      label={'Показать объекты'}
                      view={'cobaltArrow'}
                      btnOnClick={handleSubmit}
                      width={'192px'}
                    />
                  )}
                </div>
              </fieldset>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};
