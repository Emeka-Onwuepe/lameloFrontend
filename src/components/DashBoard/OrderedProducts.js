import React, { useContext, useEffect, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import numbro from 'numbro';
import { storeContext, getOrderAndCustomer, load, LOADING } from '../State/State';
import './dashboard.css'
import ScrollTop from '../Home/ScrollTop';

const OrderedProducts = (props) => {
    const { id, total, destination, customerId } = useParams()
    const { storestate, storedispatch } = useContext(storeContext)
    const { OrderedProduct, User, customer } = storestate
    const products = OrderedProduct
    let items = ""
    useEffect(() => {
        const data = { "action": "none", "data": id, "customer": customerId, "search": "orderedproducts" }
        getOrderAndCustomer(data).then(res => storedispatch(res));
        storedispatch(load(LOADING))
        // console.log(products)
    }, [id, storedispatch])
    if (products !== undefined && products.length > 0) {
        items = products.map(item => <tr key={item.id}>
            <td>{item.name} </td>
            <td>{item.flavour === 'null' ? "" : item.flavour} </td>
            <td>{item.size} </td>
            <td>{item.price} </td>
            <td>{item.quantity} </td>
            <td>{item.price * item.quantity} </td>
        </tr>)
    }
    // if (storestate.User == "") {
    //     return < Redirect to="/ShoppingCart" />
    // }

    if (items === "") {
        return <Fragment></Fragment>

    } else {

        return (
            <div>
                {User.user !== undefined && User.user !== "" ? <div className="userNameDiv">
                    <p className="userName">Welcome, {console.log(User.fullName.toUpperCase())}</p>

                </div> : ""}
                <div>
                    <h3>CUSTOMER DETAILS</h3>
                    <p>Name: {customer.fullName}</p>
                    <p>Zone: {destination}</p>
                    <p>Address: {customer.address}</p>
                    <p>Email: {customer.email}</p>
                    <p>Phone_Number: {customer.phoneNumber}</p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Flavour</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>{items}</tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5">Total</td>
                            <td>&#x20A6; {numbro(total).format({ thousandSeparated: true })}</td>
                        </tr>
                    </tfoot>
                </table>
                <ScrollTop />
            </div>
        );

    }

};

export default OrderedProducts;
