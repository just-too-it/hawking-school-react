import React, { FC, useState } from 'react';
import { Field } from 'formik';
import clsx from 'clsx';

import { CheckboxProps } from './SCheckbox.types';

import styles from './SCheckbox.module.scss';

export const SCheckbox: FC<CheckboxProps> = ({ id, name, value, label, checked = false, onClick }) => {
const [checked2, setChecked2] = useState(checked)

  return (
    <div className={styles.checkbox}>
      <Field
        type="checkbox"
        name={name}
        value={value}
        className={clsx(styles.input)}
        id={`${id}_${value}`}
        onClick={()=>{/* setChecked2(!checked2) */;onClick()}}
        /* checked={checked2} */
      />
      <label htmlFor={`${id}_${value}`} className={styles.label}>
        {label}
      </label>
    </div>
  );
};
