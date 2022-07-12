import React, { useState, FC } from 'react';
import { SelectorProps } from './SSelector.types';
import { Field } from 'formik';


export const SSelector: FC<{options: SelectorProps[]; placeholder: string; name: string; setValue: any }> = ({options, placeholder, name, setValue}) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('');

  const headerClassName = isActive ? 'select__header select__header_active' : 'select__header';

  return (
    <div className="select" onClick={() => setIsActive(!isActive)}>
      <Field
        type="text"
        className={headerClassName}
        placeholder={selected === '' ? placeholder : selected}
        value={selected}
        name={name}
      />
      {isActive && (
        <ul className="select__list">
          {options.map((option) => (
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
