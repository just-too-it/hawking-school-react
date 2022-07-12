import React from 'react';

import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { SInput } from '../../UI/SInput';
import { SButton } from '../../UI/SButton';
import { SSelect } from '../../UI/SSelect';
import { chooseCity, rooms } from '../../../core/mockData/mockData';

import styles from './TabFormCity.module.scss';
import { useNavigate } from 'react-router-dom';
import { PagesLinks } from '../../../core/constants/pagesLinks.constant';

export const TabFormCity = () => {
  const navigate = useNavigate()
  const initialValues = {
    city: '',
    rooms: '',
    priceFrom: '',
    priceTo: '',
  };

  const validationSchema: unknown = yup.object().shape({
    priceFrom: yup.number(),
    /*     login: yup
      .string()
      .required('Обязательно для заполнения')
      .matches(/^[a-zA-Z]+$/, 'Допускаются только латинские символы'), */
  });

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 400);
      }}
      validationSchema={validationSchema}
    >
      {({ errors, handleSubmit, setFieldValue, isValid }) => (
        <Form className={styles.form}>
          <fieldset className={styles.fieldset}>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Город</div>
              <SSelect selector={chooseCity} name={'city'} setValue={setFieldValue} />
            </div>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Комнаты</div>
              <SSelect selector={rooms} name={'rooms'} setValue={setFieldValue} />
            </div>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Цена за сутки (BYN)</div>
              <div className={styles.prices}>
                <SInput type="number" placeholder={'От'} name={'priceFrom'} /> -
                <SInput type="number" placeholder={'До'} name={'priceTo'} />
              </div>
            </div>
            <div className={styles.item}>
                <SButton type="button" label="Больше опций" view={'transparentOptions'} width={'122px'} btnOnClick={()=>navigate(PagesLinks.APARTMENTS_PAGE)} />
            </div>
            <div className={styles.item}>
                <SButton type="button" label="На карте" view={'transparentMap'} width={'80px'} btnOnClick={()=>navigate(PagesLinks.APARTMENTS_PAGE)} />
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
