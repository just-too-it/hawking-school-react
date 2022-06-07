import React from 'react';
import { Menu } from '../../core/constants/menu.constant';
import { Nav } from './Nav';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <Nav menu={Menu}/>
        </div>
        <section className="header__subnav">

        </section>
      </div>
    </header>
  );
};
