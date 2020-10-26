import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { storeContext, getOrder, ADD_NOTIFICATION } from '../components/State/State';


const Notifications = () => {
    const { storestate, storedispatch } = useContext(storeContext)
    const { Orders, archive, notification } = storestate

    // useEffect(() => {
    // }, [Orders]);

    const joined = Orders.concat(archive)
    setInterval(() => {
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
                    data: newOrder
                }
                storedispatch(data)
                storedispatch(res)
                newOrder = []
            }
        })
    }, 120000);
    return (
        <div>
            <p>{notification.length}</p>
        </div>
    );
};


Notifications.propTypes = {

};


export default Notifications;
