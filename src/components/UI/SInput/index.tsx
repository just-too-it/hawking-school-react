import React, { FC, useState, useEffect } from 'react';
import { InputProps } from './SInput.types';
import styles from './SInput.module.scss';
import clsx from 'clsx';
import { ReactComponent as UserIcon } from '../../../assets/images/icons/user.svg';
import { ReactComponent as MailIcon } from '../../../assets/images/icons/mail.svg';
import { ReactComponent as WarningIcon } from '../../../assets/images/icons/warning.svg';
import { Field, ErrorMessage } from 'formik';

export const SInput: FC<InputProps> = ({ type, placeholder, iconName, label, name, addStyles, isWarning }) => {
  const [iconLeft, setIconLeft] = useState(null as React.ReactElement);
  const [iconRight, setIconRight] = useState(null as React.ReactElement);

  const wrapperClassNames = clsx(styles.wrapper, iconName == 'name' && styles.user, iconName == 'email' && styles.mail);
  const inputClassNames = clsx(styles.input, isWarning && styles.input_warning);

  useEffect(() => {
    switch (name) {
      case 'name':
        setIconLeft(<UserIcon />);
        break;
      case 'email':
        setIconLeft(<MailIcon />);
        break;

      default:
        break;
    }
  }, []);

  useEffect(() => {
    isWarning ? setIconRight(<WarningIcon />) : setIconRight(null);
  }, [isWarning]);

  return (
    <label className={styles.label}>
      {label ? label : null}
      <div className={wrapperClassNames}>
        <div className={styles.iconLeft}>{iconLeft ? iconLeft : null}</div>
        <Field type={type} name={name} placeholder={placeholder} className={inputClassNames} style={addStyles} />
        <div className={styles.iconRight}>{iconRight ? iconRight : null}</div>
      </div>
    </label>
  );
};
