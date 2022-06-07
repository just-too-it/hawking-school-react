import React, { FC } from 'react';
import { PagesLinks } from '../../../core/constants/pagesLinks.constant';
import { INav } from './Nav.types';

export const Nav: FC<{ menu: INav }> = (props) => {
  const { nav } = props.menu;

  return (
    <nav className="nav">
      <ul className="nav__main">
        {nav.map((item) => (
          <li key={item.title} className="nav__item">
              <a href={item.link} title={item.title} className={item.title == 'Объявления на карте'? 'nav__link nav__link_map' : 'nav__link'}>{item.title}</a>
          </li>
        ))}
      </ul>
      <ul className='nav__sub'>
      <li className="nav__bookmarks">
              <a href={PagesLinks.BOOKMARKS_PAGE} title='Закладки' className="nav__link">Закладки</a>
        </li>
        <li className="nav__login">
              <a href={PagesLinks.LOGIN_PAGE} title='Вход и регистрация' className="nav__link">Вход и регистрация</a>
        </li>
      </ul>

      
    </nav>
  );
};
