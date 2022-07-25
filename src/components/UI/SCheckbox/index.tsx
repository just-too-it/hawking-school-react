import React, { FC } from 'react';
import { Field } from 'formik';
import clsx from 'clsx';

import { CheckboxProps } from './SCheckbox.types';

import styles from './SCheckbox.module.scss';

export const SCheckbox: FC<CheckboxProps> = ({ id, name, value, label, checked = false, onClick }) => {
  return (
    <div className={styles.checkbox}>
      <Field
        type="checkbox"
        name={name}
        value={value}
        className={clsx(styles.input)}
        id={`${id}_${value}`}
        onClick={onClick}
        /* checked={checked} */
      />
      <label htmlFor={`${id}_${value}`} className={styles.label}>
        {label}
      </label>
    </div>
  );
};
