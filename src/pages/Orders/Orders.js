import React, { useContext, useEffect } from 'react'
import { storeContext, CLEAR_NOTIFICATION, load } from '../../components/State/State';
import { ThemeContext } from '../Context/ThemeContext';

import NotificationList from './NotificationList';

import './Notification.css';
import AdminNavbar from '../AdminNavbar';

const Order = () => {

    const theme = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const checkTheme = isLightTheme ? light : dark
    const { storestate, storedispatch } = useContext(storeContext);

    const { notification, logged } = storestate;

    let NotList = <NotificationList products={notification} />
    // useEffect(() => {
    // const config = { headers: { "Content-Type": "application/json", "Authorization": `Token ${storestate.User.token}` } }
    // getOrder(config).then(res => storedispatch(res));
    // }, []);

    useEffect(() => {

        return () => {
            storedispatch(load(CLEAR_NOTIFICATION))
        };
    }, []);

    if (!logged) {
        return window.location = "/login";
    }
    const { User: {user: {username}}} = storestate;
    
    return (
        <div className="dashboard-page ms-content-wrapper" style={{ backgroundColor: checkTheme.bg, color: checkTheme.bgColor }}>
            <AdminNavbar />
            <div className="admin-welcome"><h2 style={{ textAlign: 'center' }}>Welcome, {username}</h2></div>
            {NotList}
        </div>
    )
}

export default Order
