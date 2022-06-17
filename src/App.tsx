import React from 'react';
import { SSelect } from './components/UI/SSelect';
import {chooseCity } from './core/mockData/mockData'
import { News } from './views/pages/News';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';

function App() {

  return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
  )
}

export default App;
