import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PagesLinks } from '../core/constants/pagesLinks.constant';
import { Layout } from '../views/layouts/Layout';
import { News } from '../views/pages/News';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={PagesLinks.NEWS_PAGE} element={<News />} />
        <Route path={`${PagesLinks.NEWS_PAGE}/:id`} element={<Layout />} /> 
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
