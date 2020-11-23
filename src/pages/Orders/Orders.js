import React, { useContext, useEffect } from 'react'
import { storeContext, CLEAR_NOTIFICATION, load, getOrder, refreshPage } from '../../components/State/State';
import { ThemeContext } from '../Context/ThemeContext';
import { useHistory } from 'react-router-dom'

import NotificationList from './NotificationList';

import './Notification.css';
import AdminNavbar from '../AdminNavbar';

const Order = () => {

    const theme = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const checkTheme = isLightTheme ? light : dark
    const { storestate, storedispatch } = useContext(storeContext);

    const { notification, logged, AdminUser:{user: {username}} } = storestate;
    const history = useHistory()

    let NotList = <NotificationList products={notification} />
    useEffect(() => {
    const config = { headers: { "Content-Type": "application/json", "Authorization": `Token ${storestate.User.token}` } }
    getOrder(config).then(res => storedispatch(res));
    }, []);

    useEffect(() => {

        return () => {
            storedispatch(load(CLEAR_NOTIFICATION))
        };
    }, []);

    if (!logged) {
       history.push("/login");
       refreshPage()
    }

    
    return (
        <div className="dashboard-page ms-content-wrapper" style={{ backgroundColor: checkTheme.bg, color: checkTheme.bgColor }}>
            <AdminNavbar />
            <div className="admin-welcome"><h2 style={{ textAlign: 'center' }}>Welcome, {username}</h2></div>
            {NotList}
        </div>
    )
}

export default Order
