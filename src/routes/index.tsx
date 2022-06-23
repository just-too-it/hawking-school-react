import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PagesLinks } from '../core/constants/pagesLinks.constant';
import { Layout } from '../views/layouts/Layout';
import { Contacts } from '../views/pages/Contacts';
import { Home } from '../views/pages/Home';
import { News } from '../views/pages/News';
import { NewsItem } from '../views/pages/NewsItem';
import { NotFound } from '../views/pages/NotFound';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={PagesLinks.MAIN_PAGE} element={<Home />} />
        <Route path={PagesLinks.NEWS_PAGE} element={<News />} />
        <Route path={`${PagesLinks.NEWS_PAGE}/:id`} element={<NewsItem />} /> 
        <Route path={PagesLinks.CONTACTS_PAGE} element={<Contacts />} />
        <Route path='*' element={<NotFound />}/>
        {/*       <Route path={PagesLinks.SIGN_IN_PAGE} element={<SignIn />} />
      <Route path={PagesLinks.SIGN_UP_PAGE} element={<SignUp />} />
      <Route path={PagesLinks.REGISTRATION} element={<Registration />} />
      <Route path={PagesLinks.MESSAGES} element={<Messanges />} />
      <Route path={`${PagesLinks.MESSAGES}/:id`} element={<Messanges />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Error />} /> */}
      </Route>
    </Routes>
  );
};
