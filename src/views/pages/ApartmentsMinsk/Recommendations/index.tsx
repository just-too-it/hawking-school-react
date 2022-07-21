import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { RecommendationProps } from '../../../../components/ApartmentList/ApartmentListProps.types';

import styles from './Recommendations.module.scss';

export const Recommendations: FC<{ recommendations: RecommendationProps[] }> = (props) => {
  return (
    <section className={styles.rec}>
      <h3 className={styles.title}>Рекомендуем посмотреть</h3>
      {props.recommendations && (
        <ul className={styles.list}>
          {props.recommendations.map((rec) => (
            <li key={rec.label} className={styles.item}>
              <Link to={rec.path} className={styles.link}>
                {rec.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
