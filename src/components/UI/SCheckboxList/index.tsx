import React, { FC, useState } from 'react';

import { SCheckbox } from '../SCheckbox';
import { CheckboxProps } from '../SCheckbox/SCheckbox.types';

import styles from './SCheckboxList.module.scss';

export const SCheckboxList: FC<{ options: CheckboxProps[]; setValue }> = ({ options=[], setValue }) => {
  const [selected, setSelected] = useState([]);
 /*  const [checked, setChecked] = useState(false) */

  return (
    <ul className={styles.list}>
      {options.map((option) => (
        <li key={option.id} className={styles.item}>
          <SCheckbox
            label={option.label}
            id={option.id}
            name={option.name}
            value={option.value}
            checked={option.checked /* ? !checked : checked */}
            onClick={() => {
              setSelected([...selected, option.value]);
              setValue(option.name, selected);
              /* setChecked(!checked) */
            }}
          />
        </li>
      ))}
    </ul>
  );
};
