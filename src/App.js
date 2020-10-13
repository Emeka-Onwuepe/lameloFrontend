import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Aos from 'aos';

import './App.css';

import Routes from './Routes';
import StoreContextProvider from './components/State/State';

import './App.css'
// import Admin from './pages/Admin';
// import AdminNavbar from './pages/AdminNavbar';
function App(props) {
  useEffect(() => (
    Aos.init({duration: 2000})))
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
