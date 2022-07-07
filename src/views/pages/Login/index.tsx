import React from 'react'
import { useLocation } from 'react-router-dom'
import { PagesLinks } from '../../../core/constants/pagesLinks.constant';

import styles from './Login.module.scss'
import { LoginContent } from './LoginContent';
import { RegContent } from './RegContent';

export const Login = () => {
    const location = useLocation();
    const isLogin = location.pathname === PagesLinks.LOGIN_PAGE;

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        {isLogin ? 
          <LoginContent />
:<RegContent/>
          }
      </div>
    </div>
  )
}
