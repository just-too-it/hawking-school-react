//import 'react-app-polyfill/ie11';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { FormControlLabel } from '@mui/material';

import { PagesLinks } from '../../../../core/constants/pagesLinks.constant';
import { SSwitch } from '../../../../components/UI/Switch';
import { SInput } from '../../../../components/UI/SInput';
import { SButton } from '../../../../components/UI/SButton';

import styles from './LoginContent.module.scss';

export const LoginContent = () => {
  const navigate = useNavigate();
  const initialValues = {
    login: '',
    pass: '',
  };

  const validationSchema: unknown = yup.object().shape({
    login: yup
      .string()
      .required('Обязательно для заполнения')
      .matches(/^[a-zA-Z]+$/, 'Допускаются только латинские символы'),
    pass: yup
      .string()
      .required('Обязательно для заполнения')
      .matches(/^[a-zA-Z]+$/, 'Допускаются только латинские символы'),
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Авторизация</h1>
      <div className={styles.description}>Авторизируйтесь, чтобы начать публиковать свои объявления</div>
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
            navigate(PagesLinks.MAIN_PAGE);
          }, 400);
        }}
        validationSchema={validationSchema}
      >
        {({ errors, handleSubmit, isValid }) => (
          <Form className={styles.form}>
            <fieldset className={styles.fieldset}>
              <div className={styles.controls}>
                <SInput
                  type="text"
                  placeholder="Логин"
                  iconName="user"
                  name={'login'}
                  isWarning={errors.login ? true : false}
                  width={'306px'}
                />
                <SInput
                  type="password"
                  placeholder="Пароль"
                  iconName="pass"
                  name={'pass'}
                  isWarning={errors.pass ? true : false}
                  width={'306px'}
                />
                <div className={styles.remember}>
                  <FormControlLabel control={<SSwitch sx={{ m: 1 }} />} label="Запомнить меня" />
                  <Link to={'/mock-link'}>Забыли пароль?</Link>
                </div>
              </div>
              <div className={styles.buttons}>
                {!isValid && <SButton type="submit" label={'Ошибка ввода'} view={'warning'} btnOnClick={handleSubmit} width={'306px'} />}
                <SButton type="submit" label={'Войти'} view={'yellow'} btnOnClick={handleSubmit} width={'306px'} />
              </div>
            </fieldset>
          </Form>
        )}
      </Formik>
      <div className={styles.footer}>
        Еще нет аккаунта? <Link to={PagesLinks.REG_PAGE}>Создайте аккаунт</Link>
      </div>
    </div>
  );
};
