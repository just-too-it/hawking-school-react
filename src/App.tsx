import React from 'react';
import { SSelect } from './components/UI/SSelect';
import {chooseCity } from './core/mockData/mockData'

function App() {

  return (
    <>
      <SSelect selector={chooseCity} />
    </>
  )
}

export default App;
