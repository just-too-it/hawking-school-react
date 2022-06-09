import React, { FC } from 'react';
import { IButton } from './SButton.type';

export const SButton: FC<{ btn: IButton }> = (props) => {
  const { label, type, btnOnClick } = props.btn;

  return (
    <button type={type} onClick={btnOnClick} className="button">
      {label}
    </button>
  );
};
