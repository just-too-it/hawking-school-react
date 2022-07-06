import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PagesLinks } from '../core/constants/pagesLinks.constant';
import { RootState } from '../store/store';
import { Layout } from '../views/layouts/Layout';
import { publicRoutes, authRoutes } from './routes';

export const AppRouter = () => {
  const { isAuth } = useSelector((state: RootState) => state.userReducer);

  return (
    <Routes>
      <Route path={PagesLinks.MAIN_PAGE} element={<Layout />}>
        {isAuth && authRoutes.map(({ path, Component }) => <Route path={path} element={<Component />} key={path} />)}
        {publicRoutes.map(({ path, Component }) => (
          <Route path={path} element={<Component />} key={path} />
        ))}
      </Route>
    </Routes>
  );
};
