import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SButton } from '../../../components/UI/SButton';
import styles from './NotFound.module.scss';
import { PagesLinks } from '../../../core/constants/pagesLinks.constant';
import { ReactComponent as ErrorIcon } from '../../../assets/images/404.svg';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.error}>
      <div className={`container ${styles.container}`}>
        <div className={styles.info}>
          <h1 className={styles.title}>Ошибка 404</h1>
          <div className={styles.description}>
            Возможно, у вас опечатка в адресе страницы, или её просто не существует
          </div>
          <SButton
            label={'Вернуться на главную'}
            type={'button'}
            color={'yellowIcon'}
            btnOnClick={() => {
              navigate(PagesLinks.MAIN_PAGE);
            }}
          />
        </div>
        <div className={styles.code}>
          <ErrorIcon />
        </div>
      </div>
    </main>
  );
};
