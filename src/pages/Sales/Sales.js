import React, { useContext, useEffect } from 'react'
import AdminNavbar from '../AdminNavbar'
import { ThemeContext } from '../Context/ThemeContext'
import SalesList from './SalesList';
import { storeContext } from "../../components/State/State";
import { useHistory } from 'react-router-dom'

const Sales = () => {
    const theme = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const checkTheme = isLightTheme ? light : dark;
    const { storestate, storedispatch } = useContext(storeContext);
    // const{logged, AdminUser:{user: {username}} } = storestate
    const { logged, AdminUser } = storestate;
    const history = useHistory()


    if (!logged) {
        history.push("/login");
        refreshPage()
     }

    

    return (
        <div className="ms-content-wrapper dashboard-page" style={{ backgroundColor: checkTheme.bg, color: checkTheme.bgColor }}>
            <AdminNavbar />
            <div className="admin-welcome"><h2 style={{ textAlign: 'center' }}>Welcome, {AdminUser.user.username}</h2></div>
            <SalesList />
        </div>
    )
}

export default Sales
