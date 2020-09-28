import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'

import Routes from './Routes';
import StoreContextProvider from './components/State/State';

import './App.css'
function App() {
  return (
    <div>
      <StoreContextProvider>
        <Router>
           <Routes />
         </Router>
      </StoreContextProvider>
    </div>
  );
}

export default App;
