import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import OrderedList from '../cart/OrderedList';
import { storeContext } from '../State/State';


const OrderedHistory = () => {
    const { storestate, storedispatch } = useContext(storeContext)
    const { Ordered } = storestate;
    let orderedlist = <OrderedList products={Ordered} />
    return (
        <div>
            <div className="orderList" >
                {Ordered.length > 0 ? orderedlist : <p className="text-center mt-4">You haven't made any order yet</p>}
            </div>
        </div>
    );
};


OrderedHistory.propTypes = {

};


export default OrderedHistory;
