import React, { FC } from 'react';
import { ServiceCardProps } from './ServiceCard.types';

import styles from './ServiceCard.module.scss';
import { SButton } from '../UI/SButton';
import clsx from 'clsx';

export const ServiceCard: FC<ServiceCardProps> = ({ title, subTitle, icon, description, btn, gold }) => {
  return (
    <article className={clsx(styles.card, gold && styles.gold)}>
      <header className={styles.header}>
        {title && <div className={styles.title}>{title}</div>}
        {subTitle && (
          <>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.subtitle}>{subTitle}</div>
          </>
        )}
      </header>
      <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></div>
      <SButton label={btn.label} btnOnClick={btn.btnOnClick} view={btn.view} />
    </article>
  );
};
