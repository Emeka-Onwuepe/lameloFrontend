import React from 'react';
import './App.css'

import Routes from './Routes';
import StoreContextProvider from './components/State/State';

import './App.css'
function App() {
  return (
    <div>
      <StoreContextProvider>
        <Routes />
      </StoreContextProvider>
    </div>
  );
}

export default App;
