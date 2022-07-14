import React, { FC } from 'react';

import { PromoCardProps } from './PromoCard.types';

import styles from './PromoCard.module.scss';
import { SButtonIcon } from '../../UI/SButtonIcon';
import { ReactComponent as ArrowCirleIcon } from '../../../assets/images/icons/arrowCircle.svg';
import { SButton } from '../../UI/SButton';
import { useNavigate } from 'react-router-dom';

export const PromoCard: FC<PromoCardProps> = ({ title, description, mode, img, tags, iconLink }) => {
  const promoClassName = mode === 'normal' ? styles.card : [styles.card, styles.cardWide].join(' ');
  const navigate = useNavigate();

  return (
    <article className={promoClassName}>
      <div className={styles.container}>
        <div className={styles.description}>{description}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.tags}>
          {tags?.map((tag) => (
            <div className={styles.tag} key={tag.label}>
              <SButton label={tag.label} btnOnClick={() => navigate(tag.link)} view="cobaltTag" />
            </div>
          ))}
        </div>
        <div className={styles.button}>
          {iconLink && (
            <SButtonIcon btnOnClick={() => navigate(iconLink)}>
              <ArrowCirleIcon width="40" height="40" fill="red" className={styles.icon} />
            </SButtonIcon>
          )}
        </div>
      </div>
      <img src={img} alt={title} width={'auto'} height={270} className={styles.img} />
    </article>
  );
};
