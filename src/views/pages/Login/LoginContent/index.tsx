//import 'react-app-polyfill/ie11';
import React from 'react';
import { Link } from 'react-router-dom';
import { PagesLinks } from '../../../../core/constants/pagesLinks.constant';
import styles from './LoginContent.module.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export const LoginContent = () => {

  const initialValues = {
    name: '',
    organization: '',
    region: '',
    city: '',
    interests: '',
    partners: '',
    about: '',
  };
  


  const validationSchema: unknown = yup.object().shape({
    name: yup.string().required('Обязательно для заполнения')
  });;


  return (
  <>
    <h1 className={styles.title}>Авторизация</h1>
    <div className={styles.header}>Авторизируйтесь, чтобы начать публиковать свои объявления</div>
    <Formik
      initialValues={initialValues}
      validateOnChange={true}
      validateOnBlur={false}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 400);
      }}
      //validationSchema={validationSchema}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty, setFieldValue }) => (
        <Form className="max-width ob is-web" >
          <Field type="text" name={'name'} className={''} placeholder={'dsfsdf'} />
      {ErrorMessage.name ? (
        <div className={'registration__error'}>
          <ErrorMessage name={'name'} />
        </div>
      ) : null}
        </Form>)}
    </Formik>
    <div className={styles.footer}>Еще нет аккаунта? <Link to={PagesLinks.LOGIN_PAGE}>Создайте аккаунт</Link></div>
  </>
  );
};
