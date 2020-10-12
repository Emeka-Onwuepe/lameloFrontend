import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import numbro from 'numbro';
import { storeContext } from '../State/State';

const OrderList = (props) => {
    const products = props.products
    const list = products.map(items => (
        <tr key={items.id}>
            <td><NavLink to={`/ordered/${items.id}/${items.total}`}> {items.OrderId}</NavLink> </td>
            <td><NavLink to={`/ordered/${items.id}/${items.total}`}> &#x20A6; {numbro(items.total).format({ thousandSeparated: true })}</NavLink></td>
            <td><NavLink to={`/ordered/${items.id}/${items.total}`}>&#x20A6; {numbro(items.logistics).format({ thousandSeparated: true })}</NavLink></td>
            <td> <NavLink to={`/ordered/${items.id}/${items.total}`}>{items.created}</NavLink></td>
            <td> <NavLink to={`/ordered/${items.id}/${items.total}`}>{items.delivered}</NavLink></td>
        </tr>

    ))

    return (
        <div>
            <div className="orderedList page">
                <table>
                    <thead>
                        <tr>
                            <th>Ref No:</th>
                            <th>Amount</th>
                            <th>Logistics </th>
                            <th>Date ordered</th>
                            <th>Delivered</th>
                        </tr>
                    </thead>
                    <tbody>{list}</tbody>
                </table>
            </div>
        </div>
    );
};


export default OrderList;