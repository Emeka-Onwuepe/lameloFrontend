import React, { useContext, useEffect } from 'react'
import { storeContext, getOrder } from './../components/State/State'
// import { ThemeContext } from './Context/ThemeContext';

// import { Card } from 'reactstrap';
import OrderList from './OrderList';

const Dashboard = () => {
    const { storestate, storedispatch } = useContext(storeContext)
    const { Orders } = storestate;
    const { User } = storestate
    let OrderedList = <OrderList products={Orders} />
    useEffect(() => {
        getOrder().then(res => storedispatch(res))
    }, []);
    return (
        <div className="dashboard">
            <h2 style={{textAlign: 'center'}}>Welcome, Admin</h2>
            {OrderedList}
        </div>
    )
}

export default Dashboard
