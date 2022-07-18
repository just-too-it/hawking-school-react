import React, { FC } from 'react';

import { ApartmentCardProps } from './ApartmentCard.types';
import { ApartmentCardVertical } from './ApartmentCardVertical';

import styles from './ApartmentCard.module.scss';

export const ApartmentCard: FC<{ apartment: ApartmentCardProps; isListMode: boolean }> = (props) => {
  return <>{props.isListMode ? <ApartmentCardVertical apartment={props.apartment} /> : <div>HorizontalCard</div>}</>;
};
