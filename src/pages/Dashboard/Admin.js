import React, { useContext } from 'react';
import AdminNavbar from '../AdminNavbar';
import Dashboard from './Dashboard'
import { ThemeContext } from '../Context/ThemeContext'
import './Admin.css'



const Admin = () => {
    const theme = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const checkTheme = isLightTheme ? light : dark;
    return (
       <div style={{backgroundColor: checkTheme.bg, color: checkTheme.bgColor}}>
            <AdminNavbar />
            <Dashboard />
       </div>
    )
}



export default Admin
