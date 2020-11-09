import React, { useContext, useEffect } from 'react'
// import { Redirect } from 'react-router-dom';
import { storeContext, getOrder } from '../../components/State/State';

import OrderList from './OrderList';

const Dashboard = () => {
    const { storestate, storedispatch } = useContext(storeContext)
    const { Orders, User, logged } = storestate;

    let OrderedList = <OrderList products={Orders} />
    useEffect(() => {
        const config = { headers: { "Content-Type": "application/json", "Authorization": `Token ${storestate.User.token}` } }
        getOrder(config).then(res => storedispatch(res));
    }, []);
    if (!logged) {
        return window.location = "/login";
    }
    const { user: { username} } = User;
    return (
     
        <div className="dashboard-page">
           <div className="admin-welcome"><h2 style={{ textAlign: 'center' }}>Welcome, {username}</h2></div>
            {OrderedList}
        </div> 
       
    )
}

export default Dashboard
