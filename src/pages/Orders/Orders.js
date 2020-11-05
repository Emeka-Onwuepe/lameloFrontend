import React, { useContext, useEffect } from 'react'
import { storeContext, getOrder } from '../../components/State/State';
import { ThemeContext } from '../Context/ThemeContext';

import NotificationList from './NotificationList';

import './Notification.css';
import AdminNavbar from '../AdminNavbar';

const Order = () => {

    const theme = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const checkTheme = isLightTheme ? light: dark
    const { storestate, storedispatch } = useContext(storeContext);

    const { notification } = storestate;

    let NotList = <NotificationList products={notification} />
    useEffect(() => {
        getOrder().then(res => storedispatch(res));
    }, []);
    return (
        <div className="dashboard-page ms-content-wrapper" style={{backgroundColor: checkTheme.bg, color: checkTheme.bgColor}}>
            <AdminNavbar />
            <div className="admin-welcome"><h2 style={{textAlign: 'center'}}>Welcome, Admin</h2></div>
            {NotList}  
        </div>
    )
}

export default Order
