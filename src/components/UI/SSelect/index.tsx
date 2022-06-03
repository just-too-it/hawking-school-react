import React, { useState, FC } from 'react';
import { ISelector } from './SSelector.types';

export const SSelect: FC<{selector: ISelector}> = (props) => {
  const {title, list} = props.selector;
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('');

  const headerClassName = isActive ? "select__header select__header_active" : "select__header";

  return (
    <div className="select">
      <div className={headerClassName} onClick={() => setIsActive(!isActive)}>
        {selected === '' ? title : selected}
      </div>
      {isActive && (
        <ul className="select__list">
          {list.map((option) => (
            <li
              key={option.id}
              className="select__item"
              onClick={(e) => {
                setSelected(option.value);
                setIsActive(false);
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