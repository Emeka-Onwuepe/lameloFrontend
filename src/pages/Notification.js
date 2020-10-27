import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { storeContext, getOrder, ADD_NOTIFICATION } from '../components/State/State';


const Notifications = () => {
    const { storestate, storedispatch } = useContext(storeContext)
    const { Orders, archive, notification } = storestate
    useEffect(() => {
        const joined = Orders.concat(archive)
        const orderCheckInterval = setInterval(() => {
            getOrder().then(res => {
                let newOrder = []
                res.data.forEach(element => {
                    const check = joined.filter(item => item.id == element.id)
                    if (check.length == 0) {
                        newOrder.push(element)
                    }
                });
                if (newOrder.length > 0) {
                    const data = {
                        type: ADD_NOTIFICATION,
                        neworder: newOrder,
                        data: res.data,
                        customers: res.customers
                    }
                    storedispatch(data)
                    //call here
                }
            })
        }, 60000);
        return () => clearInterval(orderCheckInterval)
    }, [Orders]);


    return (
        <>
            {notification.length}
        </>
    );
};


Notifications.propTypes = {

};


export default Notifications;
