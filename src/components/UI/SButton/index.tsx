import React, { FC } from 'react';
import { IButton } from './SButton.type';

export const SButton: FC<IButton> = ({ label, type, btnOnClick }) => {
  return (
    <button type={type} onClick={btnOnClick} className="button">
      {label}
    </button>
  );
};
