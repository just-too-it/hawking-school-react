import React, { FC, useState, useEffect } from 'react';
import { IButton } from './SButton.type';
import { ReactComponent as HomeIcon } from '../../../assets/images/icons/home.svg';

export const SButton: FC<IButton> = ({ label, type, btnOnClick, color, icon, ...rest }) => {
  const [buttonClassName, setButtonClassName] = useState('button');
  const [iconBefore, setIconBefore] = useState(null as React.ReactElement);


  useEffect(()=>{
    switch (color) {
      case 'yellow':
        setButtonClassName('button button_yellow');
        break;
      case 'yellowIcon':
        setButtonClassName('button button_yellow-icon');
        setIconBefore(<HomeIcon/>)
        break;
      case 'cobalt':
        setButtonClassName('button button_cobalt');
        break;
      case 'cobaltArrow':
        setButtonClassName('button button_cobalt-arrow');
        break;
      default:
        setButtonClassName('button');
        break;
    }
  },[])
  

  


  return (
    <button type={type} onClick={btnOnClick} className={buttonClassName} {...rest}>
      {iconBefore ? iconBefore : null}
      {label}
    </button>
  );
};
