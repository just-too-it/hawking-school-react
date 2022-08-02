import React, { FC, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import { ApartmentCardProps } from '../ApartmentCard.types';
import { ReactComponent as MapIcon } from '../../../assets/images/icons/map.svg';
import { ReactComponent as MetroIcon } from '../../../assets/images/icons/metro.svg';
import { ReactComponent as UserIcon } from '../../../assets/images/icons/user.svg';
import { SButton } from '../../UI/SButton';
import { PagesLinks } from '../../../core/constants/pagesLinks.constant';
import { UserCard } from '../../UserCard';
import { useRefCloseOut } from '../../../hooks/useRefCloseOut';
import { SSwiper } from '../../UI/SSwiper';

import styles from '../ApartmentCard.module.scss';

export const ApartmentCardHorizontal: FC<{ apartment: ApartmentCardProps }> = (props) => {
  const {
    id,
    title,
    address,
    img,
    status,
    price,
    peopleCount,
    peopleCountByRoom,
    rooms,
    square,
    description,
    owner,
    like = false,
  } = props.apartment;
  const [liked, setLiked] = useState(like);

  const navigate = useNavigate();
  const [ownerOpen, setOwnerOpen] = useState(false);
  const ownerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useRefCloseOut(ownerRef, setOwnerOpen);

  return (
    <article className={clsx(styles.card, styles.cardTile)}>
      <div className={clsx(styles.img)}>
        <SSwiper data={img} />
      </div>
      {status && <div className={styles.status}>{status}</div>}
      <div className={clsx(styles.container)}>
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
          <div className={styles.price}>
            {price.toFixed(2)} BYN <div className={styles.day}>за сутки</div>
          </div>
        </div>
        <address className={styles.address}>
          <div className={styles.item}>
            <MapIcon fill={'#664EF9'} width={16} height={20} />
            {address.city}, {address.street}
          </div>
        </address>
        <div className={styles.tags}>
          <div className={styles.tag}>
            <UserIcon fill={'#686868'} width={15} height={15} className={styles.user} />
            {peopleCount} {peopleCountByRoom}
          </div>
          <div className={styles.tag}>{rooms}</div>
          {location.pathname == PagesLinks.MAIN_PAGE && square && (
            <div className={styles.tag}>
              {square} м<sup>2</sup>
            </div>
          )}
          <div className={styles.tag}>
            <MetroIcon fill={'#664EF9'} width={20} height={13} />
            {address.metro}
          </div>
          <div className={styles.tag}>
            <span dangerouslySetInnerHTML={{ __html: 'район:&nbsp;' }}></span>
            {address.district}
          </div>
        </div>
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
          {location.pathname !== PagesLinks.MAIN_PAGE && (
            <SButton
              label={!liked ? 'В закладки' : 'Добавлено'}
              type={'button'}
              view={!liked ? 'liked' : 'likedActive'}
              btnOnClick={() => {
                setLiked(!liked);
                setLiked(!liked);
              }}
            />
          )}
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
