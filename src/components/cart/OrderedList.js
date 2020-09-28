import React from 'react';

import { NavLink } from 'react-router-dom';
import numbro from 'numbro';

import './ordered.css';

const OrderedList = (props) => {
    const products = props.products
    const list = products.map(items => (<li key={items.id}><NavLink to={`/ordered/${items.id}/${items.total}`}>
        <span> Id: {items.OrderId} </span>
        <span>Amount: &#x20A6; {numbro(items.total).format({thousandSeparated: true})}</span>
        <span> {items.created}</span>
    </NavLink></li>))

    return (
        <div className="orderedList page">
            <h3>List of Orders</h3>
            <ol>
                {list}
            </ol>
        </div>

    );
};


export default OrderedList;
