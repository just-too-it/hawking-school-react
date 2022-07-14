import React from 'react';
import styles from './Search.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/images/icons/search.svg';
import { Formik, Form } from 'formik';
import { SButtonIcon } from '../UI/SButtonIcon';
import { SInput } from '../UI/SInput';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { newsSlice } from '../../store/news/news.slice';

export const Search = () => {
  const { query } = useSelector((state: RootState) => state.newsReducer);
  const { setQuery } = newsSlice.actions;
  const dispatch = useDispatch();

  const initialValues = {
    query: query,
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setTimeout(() => {
          resetForm();
          setSubmitting(false);
          dispatch(setQuery(values.query));
        }, 400);
      }}
    >
      {({ handleSubmit }) => (
        <Form className={styles.search}>
          <fieldset className={styles.wrapper}>
            <SInput type="text" placeholder="Поиск по статьям" name={'query'} className={styles.input} />

            <div className={styles.button}>
              <SButtonIcon type="submit" btnOnClick={handleSubmit}>
                <SearchIcon width={'17.07'} height={'17.07'} />
              </SButtonIcon>
            </div>
          </fieldset>
        </Form>
      )}
    </Formik>
  );
};
