import React, { FC } from 'react';

import { ApartmentCardProps } from './ApartmentCard.types';
import { ApartmentCardVertical } from './ApartmentCardVertical';

import styles from './ApartmentCard.module.scss';
import { ApartmentCardHorizontal } from './ApartmentCardHorizontal';

export const ApartmentCard: FC<{ apartment: ApartmentCardProps; isListMode: boolean }> = ({
  apartment,
  isListMode = true,
}) => {
  return (
    <>
      {isListMode ? <ApartmentCardVertical apartment={apartment} /> : <ApartmentCardHorizontal apartment={apartment} />}
    </>
  );
};
