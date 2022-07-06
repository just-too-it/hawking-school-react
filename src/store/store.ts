import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {newsReducer} from './news/news.slice';
import { userReducer } from './user/user.slice';

const rootReducer = combineReducers({
    newsReducer,
    userReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false, //при загрузке массива новостей была проблема с тем, что данные с датой передавались с ошибкой. возможно, при загрузке с бэка этой проблемы не будет
    }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
