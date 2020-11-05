import React, {useContext} from 'react'
import AdminNavbar  from '../AdminNavbar'
import { ThemeContext } from '../Context/ThemeContext'
import SalesList from './SalesList';

const Sales = () => {
    const theme = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const checkTheme = isLightTheme ? light : dark;
    return (
        <div className="ms-content-wrapper dashboard-page" style={{backgroundColor: checkTheme.bg, color: checkTheme.bgColor}}>
           <AdminNavbar />
           <div className="admin-welcome"><h2 style={{textAlign: 'center'}}>Welcome, Admin</h2></div>
           <SalesList />
        </div>
    )
}

export default Sales
