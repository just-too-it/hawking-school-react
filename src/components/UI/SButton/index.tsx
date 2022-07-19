import React, { FC, useState, useEffect } from 'react';

import { IButton } from './SButton.type';

import { ReactComponent as HomeIcon } from '../../../assets/images/icons/home.svg';
import { ReactComponent as WarningIcon } from '../../../assets/images/icons/warning.svg';
import { ReactComponent as OptionsIcon } from '../../../assets/images/icons/options.svg';
import { ReactComponent as MapIcon } from '../../../assets/images/icons/map.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/images/icons/phone.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/images/icons/arrowSide.svg';

export const SButton: FC<IButton> = ({ label, type = 'button', btnOnClick, view, width, ...rest }) => {
  const [buttonClassName, setButtonClassName] = useState('button');
  const [iconBefore, setIconBefore] = useState(null as React.ReactElement);
  const [iconAfter, setIconAfter] = useState(null as React.ReactElement);

  useEffect(() => {
    switch (view) {
      case 'yellow':
        setButtonClassName('button button_yellow');
        break;
      case 'yellowLight':
        setButtonClassName('button button_yellowLight');
        break;
      case 'yellowIcon':
        setButtonClassName('button button_yellow button_yellow-icon');
        setIconBefore(<HomeIcon />);
        break;
      case 'cobalt':
        setButtonClassName('button button_cobalt');
        break;
      case 'cobaltArrow':
        setButtonClassName('button button_cobalt-arrow');
        setIconAfter(<ArrowIcon width={10} height={10} />)
        break;
      case 'violetGradient':
        setButtonClassName('button button_violet-gradient');
        break;
      case 'warning':
        setButtonClassName('button button_warning');
        setIconAfter(<WarningIcon width={20} height={20} />);
        break;
      case 'transparentOptions':
        setButtonClassName('button button_transparent button_options');
        setIconAfter(<OptionsIcon width={16} height={18} />);
        break;
      case 'transparentMap':
        setButtonClassName('button button_transparent button_map');
        setIconAfter(<MapIcon width={12} height={15} />);
        break;
      case 'cobaltTag':
        setButtonClassName('button button_cobalt button_tag');
        break;
      case 'cobaltPhone':
        setButtonClassName('button button_cobaltPhone');
        setIconBefore(<PhoneIcon />);
        break;
      default:
        setButtonClassName('button');
        break;
    }
  }, []);

  return (
    <button type={type} onClick={btnOnClick} className={buttonClassName} style={{ width: width }} {...rest}>
      {iconBefore ? iconBefore : null}
      {label}
      {iconAfter ? iconAfter : null}
    </button>
  );
};
