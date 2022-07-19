import React, { FC, useState, useEffect, useRef } from 'react';
import { ApartmentCardProps } from '../ApartmentCard.types';
import { ReactComponent as MapIcon } from '../../../assets/images/icons/map.svg';
import { ReactComponent as MetroIcon } from '../../../assets/images/icons/metro.svg';
import { ReactComponent as PointIcon } from '../../../assets/images/icons/point.svg';
import { ReactComponent as UserIcon } from '../../../assets/images/icons/user.svg';
import { SButton } from '../../UI/SButton';
import { useNavigate } from 'react-router-dom';
import { PagesLinks } from '../../../core/constants/pagesLinks.constant';
import { UserCard } from '../../UserCard';

import styles from './ApartmentCardVertical.module.scss';
import { useRefCloseOut } from '../../../hooks/useRefCloseOut';

export const ApartmentCardVertical: FC<{ apartment: ApartmentCardProps }> = (props) => {
  const { id, title, address, img, status, price, peopleCount, peopleCountByRoom, rooms, square, description, owner } =
    props.apartment;

  const navigate = useNavigate();
  const [ownerOpen, setOwnerOpen] = useState(false);
  const ownerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useRefCloseOut(ownerRef, setOwnerOpen);

  return (
    <article className={styles.card}>
      <div className={styles.img}>
        <img src={img[0]} alt={title ? title : address.street} />
      </div>
      <div className={styles.status}>{status}</div>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.price}>
            {price.toFixed(2)} BYN <div className={styles.day}>за сутки</div>
          </div>
          <div className={styles.tags}>
            <div className={styles.tag}>
              <UserIcon fill={'#686868'} width={15} height={15} className={styles.user} />
              {peopleCount} {peopleCountByRoom}
            </div>
            <div className={styles.tag}>{rooms}</div>
            {square && (
              <div className={styles.tag}>
                {square} м<sup>2</sup>
              </div>
            )}
          </div>
        </div>
        <address className={styles.address}>
          <div className={styles.item}>
            <MapIcon fill={'#BDBDBD'} width={12} height={15} />
            {address.city}, {address.street}
          </div>
          <div className={styles.item}>
            <MetroIcon fill={'#BDBDBD'} width={20} height={13} />
            {address.metro}
          </div>
          <div className={styles.item}>
            <PointIcon fill={'#BDBDBD'} width={5} height={5} />
            {address.district}
          </div>
        </address>
        <div className={styles.description}>{description}</div>
        {ownerOpen && (
          <div className={styles.owner} ref={ownerRef}>
            <UserCard user={owner} />
          </div>
        )}
        <footer className={styles.footer}>
          <SButton
            label={'Контакты'}
            type={'button'}
            view={'cobaltPhone'}
            btnOnClick={() => {
              setOwnerOpen(true);
            }}
          />
          <SButton
            label={'Подробнее'}
            type={'button'}
            view={'yellowLight'}
            btnOnClick={() => navigate(`${PagesLinks.APARTMENTS_MINSK_PAGE}/${id}`)}
          />
        </footer>
      </div>
    </article>
  );
};
