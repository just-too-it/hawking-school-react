import React from 'react'

import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { SInput } from '../../UI/SInput'; 
import { SButton } from '../../UI/SButton';
import { SSelect } from '../../UI/SSelect';
import {chooseCity} from '../../../core/mockData/mockData'

import styles from './TabFormCity.module.scss'

export const TabFormCity = () => {

  const initialValues = {
    city: '',
  };

  const validationSchema: unknown = yup.object().shape({
    
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
                <SSelect selector={chooseCity} name={'city'} setValue={setFieldValue}/>
              </div>
              <div className={styles.button}>
                <SButton type="submit" label={'Показать'} view={'yellow'} btnOnClick={handleSubmit} width={'123px'} />
              </div>
            </fieldset>
          </Form>
        )}
      </Formik>
  )
}
