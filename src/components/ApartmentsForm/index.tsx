import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import clsx from 'clsx';

import { SInput } from '../UI/SInput';
import { SButton } from '../UI/SButton';
import { SSelector } from '../UI/SSelector';
import {
  roomsList,
  citysList,
  peopleList,
  districtsMinskList,
  metroMinskList,
  optionsList,
} from '../../core/mockData/mockData';
import { filterMainSlice } from '../../store/filterMain/filterMain.slice';
import { useNavPageCity } from '../../hooks/useNavPageCity';
import { RootState } from '../../store/store';
import { apartmentsMinskSlice } from '../../store/apartments/apartmentsMinsk.slice';
import { PagesLinks } from '../../core/constants/pagesLinks.constant';
import { FilterMainProps } from '../../store/filterMain/filterMain.types';
import { ApartmentsMinskProps } from '../../views/pages/ApartmentsMinsk/ApartmentsMinsk.types';
import { SCheckboxList } from '../UI/SCheckboxList';

import styles from './ApartmentsForm.module.scss';

export const ApartmentsForm = () => {
  const location = useLocation();
  const [viewForm, setViewForm] = useState<string>('');
  const [initialValues, setInitialValues] = useState<FilterMainProps | ApartmentsMinskProps | any>();
  const optionsRef = useRef() as React.MutableRefObject<HTMLDivElement>;
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
    setPeopleCount,
    setDistrict,
    setMetro,
    setOptions,
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
    peopleCount,
    district,
    metro,
    options,
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
    peopleCount: peopleCount,
    district: district,
    metro: metro,
    options: options,
  };

  const validationSchema: unknown = yup.object().shape({
    priceFrom: yup.number(),
    priceTo: yup.number(),
  });

  const handleBtnOptionsCity = () => {
    if (optionsRef.current.style.height == '') {
      const scrollHeight = optionsRef.current?.scrollHeight;
      optionsRef.current.style.height = `${scrollHeight}px`;
      optionsRef.current.style.margin = '20px 0 29px';
      optionsRef.current.style.overflow = 'visible';
    } else {
      optionsRef.current.style.height = '';
      optionsRef.current.style.margin = '0';
      optionsRef.current.style.overflow = 'hidden';
    }
  };

  const handleBtnOptionsHome = (handleSubmit) => handleSubmit;

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
                  dispatch(setPeopleCount(values.peopleCount));
                  dispatch(setDistrict(values.district));
                  dispatch(setMetro(values.metro));
                  dispatch(setOptions(values.options));
                  break;
                default:
                  break;
              }
            }, 400);
          }}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, setFieldValue, handleReset }) => (
            <Form className={styles.form}>
              <fieldset className={clsx(styles.fieldset, viewForm == 'Minsk' && styles.fieldsetCity)}>
                <div className={clsx(styles.top, viewForm == 'Minsk' && styles.topCity)}>
                  <div className={clsx(styles.container, viewForm == 'Minsk' && 'container')}>
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
                        placeholder={roomsMinsk ? roomsMinsk : 'Выберите'}
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
                        btnOnClick={viewForm == 'Home' ? handleBtnOptionsHome(handleSubmit) : handleBtnOptionsCity}
                      />
                    </div>
                    {viewForm !== 'Home' && (
                      <div className={clsx(styles.item, viewForm == 'Minsk' && styles.itemCity)}>
                        <SButton
                          type="reset"
                          label="Очистить"
                          view={'clear'}
                          width={'100px'}
                          btnOnClick={() => {
                            handleReset();
                            dispatch(setRoomsMinsk(''));
                            dispatch(setPriceFromMinsk(''));
                            dispatch(setPriceToMinsk(''));
                            dispatch(setPeopleCount(''));
                            dispatch(setDistrict(''));
                            dispatch(setMetro(''));
                            dispatch(setOptions([]));
                          }}
                        />
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
                  </div>
                </div>

                {viewForm == 'Minsk' && (
                  <div className={clsx(styles.container, 'container')}>
                    <div className={clsx(styles.options)} ref={optionsRef}>
                      <div className={clsx(styles.item, styles.itemAdd)}>
                        <div className={styles.itemTitle}>Спальные места</div>
                        <SSelector
                          options={peopleList}
                          placeholder={initialValues.peopleCount ? initialValues.peopleCount : 'Выберите'}
                          name={'peopleCount'}
                          setValue={setFieldValue}
                          className={styles.input}
                        />
                      </div>
                      <div className={clsx(styles.item, styles.itemAdd)}>
                        <div className={styles.itemTitle}>Район</div>
                        <SSelector
                          options={districtsMinskList}
                          placeholder={initialValues.district ? initialValues.district : 'Выберите'}
                          name={'district'}
                          setValue={setFieldValue}
                          className={styles.input}
                        />
                      </div>
                      <div className={clsx(styles.item)}>
                        <div className={styles.itemTitle}>Метро</div>
                        <SSelector
                          options={metroMinskList}
                          placeholder={initialValues.metro ? initialValues.metro : 'Выберите'}
                          name={'metro'}
                          setValue={setFieldValue}
                          className={styles.input}
                        />
                      </div>
                      <div></div>
                      <div></div>
                      <SCheckboxList options={optionsList} setValue={setFieldValue} />
                    </div>
                  </div>
                )}
              </fieldset>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};
