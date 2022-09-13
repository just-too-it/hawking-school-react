import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useAppDispatch, useAppSelector } from 'store/store.hooks';

import { SearchWrapper } from 'components/SearchWrapper';
import { SSelector } from 'components/UI/SSelector';
import { apartmentsMinskSlice } from 'store/apartments/apartmentsMinsk.slice';
import { useDataForFilter } from 'hooks/useDataForFilter';

import styles from './FilterMinsk.module.scss';

export const FilterMinsk = () => {
  const dispatch = useAppDispatch();
  const { setMetro, setDistrict } = apartmentsMinskSlice.actions;
  const { metro, district } = useAppSelector((state) => state.apartmentsMinskReducer);
  const { data } = useDataForFilter();

  const initialValues = {
    metro: metro,
    district: district,
  };

  const useUpdateFilter = (action, value) => {
    useEffect(() => {
      dispatch(action(value));
    }, [value]);
  };

  return (
    <>
      <SearchWrapper>
        <Formik
          initialValues={initialValues}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className={styles.form}>
              {
                <fieldset className={styles.fieldset}>
                  <div className={styles.item}>
                    <SSelector
                      options={data?.metroMinskList}
                      placeholder={metro ? metro : 'Метро'}
                      name={'metro'}
                      className={`${styles.input} ${styles.metro}`}
                      setValue={setFieldValue}
                      setSelectedSwiftly={useUpdateFilter(setMetro, values.metro)}
                    />
                  </div>
                  <div className={styles.item}>
                    {
                      <SSelector
                        options={data?.districtsMinskList}
                        placeholder={district ? district : 'Район'}
                        name={'district'}
                        className={styles.input}
                        setValue={setFieldValue}
                        setSelectedSwiftly={useUpdateFilter(setDistrict, values.district)}
                      />
                    }
                  </div>
                </fieldset>
              }
            </Form>
          )}
        </Formik>
      </SearchWrapper>
    </>
  );
};
