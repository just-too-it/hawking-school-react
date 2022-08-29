import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as SearchIcon } from 'assets/images/icons/search.svg';
import { Formik, Form } from 'formik';
import { SButtonIcon } from 'components/UI/SButtonIcon';
import { SInput } from 'components/UI/SInput';
import { RootState } from 'store/store';
import { newsSlice } from 'store/news/news.slice';
import { SearchWrapper } from 'components/SearchWrapper';

import styles from './Search.module.scss';

export const Search = () => {
  const { query } = useSelector((state: RootState) => state.newsReducer);
  const { setQuery } = newsSlice.actions;
  const dispatch = useDispatch();
  const [queryParams, setQueryParams] = useSearchParams();
  const newsQuery = queryParams.get('query');

  useEffect(() => {
    newsQuery && dispatch(setQuery(newsQuery));
  }, []);

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
          setQueryParams({ query: values.query });
        }, 400);
      }}
    >
      {({ handleSubmit }) => (
        <SearchWrapper>
          <Form>
            <fieldset className={styles.wrapper}>
              <SInput type="text" placeholder="Поиск по статьям" name={'query'} className={styles.input} />
              <div className={styles.button}>
                <SButtonIcon type="submit" btnOnClick={handleSubmit}>
                  <SearchIcon width={'17.07'} height={'17.07'} />
                </SButtonIcon>
              </div>
            </fieldset>
          </Form>
        </SearchWrapper>
      )}
    </Formik>
  );
};
