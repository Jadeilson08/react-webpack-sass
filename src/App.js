import React from 'react';
import './App.scss';

import Header from './components/Header';
import Characters from './components/Characters';

const App = () => {
  return (
    <>
      <Header title="Rick and Morty API" />
      <Characters />
    </>
  );
};
export default App;
