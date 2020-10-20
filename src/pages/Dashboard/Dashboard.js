import React, { useContext, useEffect } from 'react'
import { storeContext, getOrder } from '../../components/State/State';

// import './Dashboard.css';

// import { Card } from 'reactstrap';
import OrderList from './OrderList';

const Dashboard = () => {
    const { storestate, storedispatch } = useContext(storeContext)
    const { Orders,  User } = storestate;
    // const { } = storestate
    let OrderedList = <OrderList products={Orders} />
    useEffect(() => {
        getOrder().then(res => storedispatch(res))
    }, []);
    return (
        <div className="dashboard-page">
            <div className="admin-welcome"><h2 style={{textAlign: 'center'}}>Welcome, Admin</h2></div>
            {OrderedList}
        </div>
    )
}

export default Dashboard
