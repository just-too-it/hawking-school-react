import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { PagesLinks } from '../../../core/constants/pagesLinks.constant';
import { IItemNav } from './Nav.types';

export const Nav: FC<{ menu: IItemNav[] }> = (props) => {
  return (
    <nav className="nav">
      <div className="container">
        <ul className="nav__main">
          {props.menu.map((item) => (
            <li key={item.title} className="nav__item">
              <Link
                to={item.link}
                title={item.title}
                className={item.title == 'Объявления на карте' ? 'nav__link nav__link_icon' : 'nav__link'}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="nav__sub">
          <li className="nav__bookmarks">
            <Link to={PagesLinks.BOOKMARKS_PAGE} title="Закладки" className="nav__link">
              Закладки
            </Link>
          </li>
          <li className="nav__login">
            <Link to={PagesLinks.LOGIN_PAGE} title="Вход и регистрация" className="nav__link">
              Вход и регистрация
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
