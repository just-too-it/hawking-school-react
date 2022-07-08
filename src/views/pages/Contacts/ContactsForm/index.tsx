import React, { FC } from 'react';

import styles from './ContactsForm.module.scss';
import { SInput } from '../../../../components/UI/SInput';
import { SButton } from '../../../../components/UI/SButton';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

export const ContactsForm: FC<{modalControl}> = (props) => {

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Обязательно для заполнения'),
    email: yup.string().email().required('Обязательно для заполнения'),
    message: yup.string().required('Обязательно для заполнения'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      validateOnBlur={true}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
          props.modalControl(true);
        }, 400);
      }}
      validationSchema={validationSchema}
    >
      {({ errors, handleSubmit }) => (
        <Form className={styles.form}>
          <fieldset>
            <div className={styles.info}>
              <SInput
                type="text"
                placeholder="Введите имя"
                iconName="user"
                label="Ваше имя"
                name={'name'}
                isWarning={errors.name ? true : false}
                width={'260px'}
              />
              <SInput
                type="email"
                placeholder="Введите почту"
                iconName="email"
                label="Ваша электронная почта"
                name={'email'}
                isWarning={errors.email ? true : false}
                width={'260px'}
              />
            </div>
            <label className={styles.label}>
              Ваше сообщение
              <Field as="textarea" name={'message'} placeholder="Сообщение" className={styles.textarea} style={errors.message? { border:'1px solid #eb5757'}: {border:'none'}}/>
            </label>
            <div className={styles.button}>
              <SButton type="submit" label={'Отправить'} view={'cobalt'} btnOnClick={handleSubmit} />
            </div>
          </fieldset>
        </Form>
      )}
    </Formik>
  );
};
