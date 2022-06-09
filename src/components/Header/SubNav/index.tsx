import React, { FC, useState } from 'react';
import { Logo } from '../../Logo';
import { PagesLinks } from '../../../core/constants/pagesLinks.constant';
import { Link } from 'react-router-dom';
import { SButton } from '../../UI/SButton';
import { IButton } from '../../UI/SButton/SButton.type';
import { ISubNav } from './SubNav.type';

export const SubNav: FC<{ menu: ISubNav }> = (props) => {
  const { subNav } = props.menu;

  const [isActiveSubmenu, setIsActiveSubmenu] = useState(false);


  const btnPlaceAd: IButton = {
    type: 'button',
    label: '+ Разместить объявление',
    btnOnClick: () => {},
  };

  return (
    <div className="subnav">
      <div className="container">
        <div className="subnav__logo">
          <Logo />
        </div>
        <ul className="subnav__list">
          {subNav.map((item) => (
            <li key={item.title} className="subnav__item" onClick={()=>setIsActiveSubmenu(!isActiveSubmenu)}>
              <Link
                to={item.link ? item.link : '#'}
                title={item.title}
                className={item.title == 'Квартиры на сутки' ? 'subnav__link subnav__link_icon' : 'subnav__link'}
              >
                {item.title}
              </Link>
              {item.list && isActiveSubmenu ? (
                <ul className='subnav__submenu'>
                  {item.list.map((item) => (
                    <li key={item.title} className='subnav__sub-item'>
                      <Link
                        to={item.link ? item.link : '#'}
                        title={item.title}
                        className='subnav__sub-link'
                      >
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
          <SButton btn={btnPlaceAd} />
        </div>

      </div>
    </div>
  );
};

{
  /* <li className="subnav__item">
            <Link to={PagesLinks.APARTMENTS_PAGE} title="Квартиры на сутки" className="subnav__link subnav__link_icon">
              Квартиры на сутки
            </Link>
          </li>
          <li className="subnav__item">
            <Link to={PagesLinks.COTTAGES_PAGE} title="Коттеджи и усадьбы" className="subnav__link">
              Коттеджи и усадьбы
            </Link>
          </li>
          <li className="subnav__item">
            <Link to={PagesLinks.SAUNAS_PAGE} title="Бани и Сауны" className="subnav__link">
              Бани и Сауны
            </Link>
          </li>
          <li className="subnav__item">
            <Link to={PagesLinks.AUTO_PAGE} title="Авто напрокат" className="subnav__link">
              Авто напрокат
            </Link>
          </li> */
}
