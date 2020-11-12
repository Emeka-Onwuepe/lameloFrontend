import React, { useContext, useEffect } from 'react'
// import { Redirect } from 'react-router-dom';
import { storeContext, getOrder } from '../../components/State/State';
import { Redirect } from 'react-router-dom'

import OrderList from './OrderList';

const Dashboard = () => {
    const { storestate, storedispatch } = useContext(storeContext)
    const { Orders, logged,  AdminUser:{user:{username}} } = storestate;
    // const { } = storestate
    let OrderedList = <OrderList products={Orders} />
    useEffect(() => {
        const config = { headers: { "Content-Type": "application/json", "Authorization": `Token ${storestate.AdminUser.token}` } }
        getOrder(config).then(res => storedispatch(res));
    }, []);
    if (!logged) {
        return <Redirect to="/login" />;
    }
    return (
     
        <div className="dashboard-page">
           <div className="admin-welcome"><h2 style={{ textAlign: 'center' }}>Welcome, {username}</h2></div>
            {OrderedList}
        </div> 
       
    )
}

export default Dashboard
