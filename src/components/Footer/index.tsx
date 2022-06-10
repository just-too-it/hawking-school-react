import React from 'react';
import { Logo } from '../Logo';
import { socialGroups } from '../../core/constants/social.constant';
import { Social } from '../Social';
import { FooterMenu, Menu } from '../../core/constants/menu.constant';
import { Info } from './Info';
import { FooterSubNav } from './FooterSubNav';
import { FooterNav } from './FooterNav';
import { Payment } from '../Payment';
import { payments } from '../../core/constants/payments.constant';

export const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <Logo />
          <div className="footer__title">Сдаём бай</div>
          <Info />
        </div>
        <div className="footer__nav">
          <FooterSubNav menu={FooterMenu} />
          <FooterNav menu={Menu} />
        </div>
        <div className="footer__external">
          <div className="footer__social">
            <Social socialBlock={socialGroups} />
          </div>
          <div className="footer__payment">
            <Payment payments={payments}/>
          </div>
        </div>
      </div>
    </footer>
  );
};
