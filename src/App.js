import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Aos from 'aos';

import './App.css';

import Routes from './Routes';
import StoreContextProvider from './components/State/State';
import ThemeContextProvider from './pages/Context/ThemeContext';
import ThemeRoutes from './ThemeRoutes'
import './App.css'

import Alerts from "./components/Alerts"
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { transitions, positions, types } from 'react-alert';

const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE,
    type: types.INFO,
}

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div>
      <StoreContextProvider>
       <AlertProvider template={AlertTemplate} {...options}>
        <Router>
          <Routes />
        </Router>
     
      <ThemeContextProvider>
        <Router>
          <ThemeRoutes />
        </Router>
      </ThemeContextProvider>
        <Alerts></Alerts>
       </AlertProvider>
      </StoreContextProvider>
    </div>
  );
}

export default App;
