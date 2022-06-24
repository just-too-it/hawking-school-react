import React, { FC, useState, useEffect } from 'react';
import { IInput } from './SInput.types';
import styles from './SInput.module.scss';
import clsx from 'clsx';
import { ReactComponent as UserIcon } from '../../../assets/images/icons/user.svg';
import { ReactComponent as MailIcon } from '../../../assets/images/icons/mail.svg';

export const SInput: FC<IInput> = ({ type, placeholder, iconName, label, name }) => {
    const [icon, setIcon] = useState(null as React.ReactElement);

    const wrapperClassNames = clsx(
        styles.wrapper,
        iconName == 'user' && styles.user,
        iconName == 'mail' && styles.mail,
      );

      useEffect(()=>{
        switch (name) {
          case 'user':
            setIcon(<UserIcon/>)
            break;
            case 'mail':
                setIcon(<MailIcon/>)
                break;
          
          default:
            break;
        }
      },[])

  return (
    <label className={styles.label}>
        {label? label: null}
        <div className={wrapperClassNames}>
            {icon ? icon : null}
            <input 
            type={type}
            name={name}
            placeholder={placeholder}
            className={styles.input}
            />
        </div>
    </label>
  );
};