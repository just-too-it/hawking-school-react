import React, { FC, useState, useEffect } from 'react';

import { IButton } from './SButton.type';

import { ReactComponent as HomeIcon } from '../../../assets/images/icons/home.svg';
import { ReactComponent as WarningIcon } from '../../../assets/images/icons/warning.svg';

export const SButton: FC<IButton> = ({ label, type, btnOnClick, view, width, ...rest }) => {
  const [buttonClassName, setButtonClassName] = useState('button');
  const [iconBefore, setIconBefore] = useState(null as React.ReactElement);
  const [iconAfter, setIconAfter] = useState(null as React.ReactElement);

  useEffect(()=>{
    switch (view) {
      case 'yellow':
        setButtonClassName('button button_yellow');
        break;
      case 'yellowIcon':
        setButtonClassName('button button_yellow button_yellow-icon');
        setIconBefore(<HomeIcon/>)
        break;
      case 'cobalt':
        setButtonClassName('button button_cobalt');
        break;
      case 'cobaltArrow':
        setButtonClassName('button button_cobalt-arrow');
        break;
      case 'violetGradient':
        setButtonClassName('button button_violet-gradient');
        break;
      case 'warning':
        setButtonClassName('button button_warning');
        setIconAfter(<WarningIcon width={20} height={20}/>)
        break;
      default:
        setButtonClassName('button');
        break;
    }
  },[])

  return (
    <button type={type} onClick={btnOnClick} className={buttonClassName} style={{width: width}} {...rest}>
      {iconBefore ? iconBefore : null}
      {label}
      {iconAfter ? iconAfter : null}
    </button>
  );
};
