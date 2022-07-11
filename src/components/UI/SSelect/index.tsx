import React, { useState, FC } from 'react';
import { ISelector } from './SSelector.types';
import { Field } from 'formik';

export const SSelect: FC<{ selector: ISelector; name: string; setValue: any }> = ({selector, name, setValue}) => {
  const { title, list } = selector;
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('');

  const headerClassName = isActive ? 'select__header select__header_active' : 'select__header';

  return (
    <div className="select" onClick={() => setIsActive(!isActive)}>
      <Field
        type="text"
        className={headerClassName}
        placeholder={selected === '' ? title : selected}
        value={selected}
        name={name}
      />
      {isActive && (
        <ul className="select__list">
          {list.map((option) => (
            <li
              key={option.id}
              className="select__item"
              onClick={() => {
                setSelected(option.value);
                setIsActive(false);
                setValue(name, option.value);
              }}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
