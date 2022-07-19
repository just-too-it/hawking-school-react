import React, { useState, FC, useRef, useEffect } from 'react';
import { SelectorProps } from './SSelector.types';
import { Field } from 'formik';
import { ReactComponent as MetroIcon } from '../../../assets/images/icons/metro.svg';
import { useRefCloseOut } from '../../../hooks/useRefCloseOut';

export const SSelector: FC<{ options: SelectorProps[]; placeholder: string; name: string; setValue?: any; className?: string; setSelectedSwiftly?: any;}> = ({
  options,
  placeholder,
  name,
  setValue,
  className,
  setSelectedSwiftly
}) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('');
  const listRef = useRef() as React.MutableRefObject<HTMLUListElement>;
  const headerClassName = isActive ? `select__header select__header_active ${className}` : `select__header ${className}`;

  useRefCloseOut(listRef, setIsActive);

  return (
    <div className={"select"} onClick={() => setIsActive(!isActive)}>
      {name === 'metro' ? <MetroIcon width={20} height={13} fill={'#BDBDBD'} className={'select_metroIcon'}/> : null}{' '}
      <Field
        type="text"
        className={headerClassName}
        placeholder={selected === '' ? placeholder : selected}
        value={selected}
        name={name}
      />
      {isActive && (
        <ul className="select__list" ref={listRef}>
          {options.map((option) => (
            <li
              key={option.id}
              className="select__item"
              onClick={() => {
                setSelected(option.value); //устанавливаем выбранные селекторы
                setIsActive(false); //закрываем список
                setValue(name, option.value); //для Formik (основной формы) - установка значения для передачи в форме
                setSelectedSwiftly; //для Formik (основной формы) - когда нет кнопки и нужна мгновенная фильтрация по выбранному значению
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
