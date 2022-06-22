import React, { FC, useState } from 'react';
import { Logo } from '../../Logo';
import { Link } from 'react-router-dom';
import { SButton } from '../../UI/SButton';
import { IButton } from '../../UI/SButton/SButton.type';
import { IItemSubNav } from './SubNav.type';

export const SubNav: FC<{ menu: IItemSubNav[] }> = (props) => {
  const [isActiveSubmenu, setIsActiveSubmenu] = useState(false);

  const btnPlaceAd: IButton = {
    type: 'button',
    label: '+ Разместить объявление',
    btnOnClick: () => {
      console.log('');
    },
  };

  return (
    <div className="subnav">
      <div className="container">
        <div className="subnav__logo">
          <Logo />
        </div>
        <ul className="subnav__list">
          {props.menu.map((item) => (
            <li
              key={item.title}
              className="subnav__item"
              onClick={() => {
                item.list ? setIsActiveSubmenu(!isActiveSubmenu) : null;
              }}
            >
              <Link
                to={item.link ? item.link : '#'}
                title={item.title}
                className={item.title == 'Квартиры на сутки' ? 'subnav__link subnav__link_icon' : 'subnav__link'}
              >
                {item.title}
              </Link>
              {item.list && isActiveSubmenu ? (
                <ul className="subnav__submenu">
                  {item.list.map((item) => (
                    <li key={item.title} className="subnav__sub-item">
                      <Link to={item.link ? item.link : '#'} title={item.title} className="subnav__sub-link">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
        <div className="subnav__button">
          <SButton
            type={'button'}
            label={'+ Разместить объявление'}
            btnOnClick={() => {
              console.log('');
            }}
          />
        </div>
      </div>
    </div>
  );
};
