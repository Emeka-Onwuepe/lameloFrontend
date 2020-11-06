import React, { useContext, useEffect, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import numbro from 'numbro';
import { storeContext, getOrderAndCustomer, load, LOADING } from '../../components/State/State';
import { ThemeContext } from '../Context/ThemeContext';

// import './dashboard-content.css'
import ScrollTop from '../../components/Home/ScrollTop';
import AdminNavbar from '../AdminNavbar';
import './OrderedProducts.css'


import { Container, Card } from 'reactstrap';

const OrderedProducts = (props) => {
    const { id, total, destination, customerId } = useParams()
    const { storestate, storedispatch } = useContext(storeContext)
    const theme = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const checkTheme = isLightTheme ? light : dark;
    const { OrderedProduct, User, customer, orderedTopping } = storestate
    const products = OrderedProduct
    let items = ""
    let toppings = ""
    useEffect(() => {
        const config = { headers: { "Content-Type": "application/json", "Authorization": `Token ${storestate.User.token}` } }
        const data = { "action": "none", "data": id, "customer": customerId, "search": "orderedproducts" }
        getOrderAndCustomer(data, config).then(res => storedispatch(res));
        storedispatch(load(LOADING))
        // console.log(products)
    }, [id, storedispatch])
    if (products !== undefined && products.length > 0) {
        items = products.map(item => <tr key={item.id} role="row" className="items-order">
            <td className="items-td" role="cell" style={{ color: checkTheme.syntax }}>{item.name} </td>
            <td className="items-td" role="cell" style={{ color: checkTheme.syntax }}>{item.size} </td>
            <td className="items-td" role="cell" style={{ color: checkTheme.syntax }}>{item.price} </td>
            <td className="items-td" role="cell" style={{ color: checkTheme.syntax }}>{item.quantity} </td>
            <td className="items-td" role="cell" style={{ color: checkTheme.syntax }}>{item.price * item.quantity} </td>
            <td></td>
        </tr>)
    }
    if (orderedTopping !== undefined && orderedTopping.length > 0) {
        toppings = orderedTopping.map(item => <tr key={item.id} role="row" className="toppings-order">
            <td className="items-td" role="cell" style={{ color: checkTheme.syntax }}>{item.name} </td>
            <td className="items-td" role="cell" style={{ color: checkTheme.syntax }}> </td>
            <td className="items-td" role="cell" style={{ color: checkTheme.syntax }}>{item.price} </td>
            <td className="items-td" role="cell" style={{ color: checkTheme.syntax }}>{item.quantity} </td>
            <td className="items-td" role="cell" style={{ color: checkTheme.syntax }}>{item.price * item.quantity} </td>
            <td></td>
        </tr>)
    }
    // if (storestate.User == "") {
    //     return < Redirect to="/ShoppingCart" />
    // }

    if (items === "" && toppings === "") {
        return <Fragment></Fragment>

    } else {

        return (
            <div className="ordered-product" style={{ backgroundColor: checkTheme.bg, color: checkTheme.bgColor }}>
                <AdminNavbar />
                {User.user !== undefined && User.user !== "" ? <div className="userNameDiv">
                    <p className="userName">Welcome, {User.fullName.toUpperCase()}</p>

                </div> : ""}
                <div className="customer-header"><h2 style={{ textAlign: 'center' }}>Customer's Order</h2></div>
                <Container className="dashboard-container">
                    {isLightTheme ? <Card style={{ backgroundColor: checkTheme.cardHeader }}>
                        <h3 style={{ textAlign: 'center', fontSize: '30px', backgroundColor: checkTheme.cardHeader, padding: '10px' }}>
                            Customer's Details
                    </h3>
                        <div className="customer-details" style={{ padding: '20px' }}>
                            <p>Name: {customer.fullName}</p>
                            <p>Zone: {destination === "iwpk" || destination === "null" ? "Customer Pickup" : destination}</p>
                            <p>Address: {customer.address}</p>
                            <p>Email: {customer.email}</p>
                            <p>Phone_Number: {customer.phoneNumber}</p>
                        </div>

                        <table className="table table-striped order-table" role="table">
                            <thead role="rowgroup" className="order-heading">
                                <tr role="row" className="order-row">
                                    <th role="columnheader">Product Name</th>
                                    <th role="columnheader">Size</th>
                                    <th role="columnheader">Price</th>
                                    <th role="columnheader">Qty</th>
                                    <th role="columnheader">Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody role="rowgroup" className="items-tbody">{items}</tbody>
                            <tbody role="rowgroup" className="toppings-tbody">{toppings}</tbody>
                            <tfoot role="rowgroup" className="product-tfoot">
                                <tr role="row" className="toppings-order">
                                    <td colSpan="5" className="items-td" role="cell" style={{ color: checkTheme.syntax }}>Total</td>
                                    <td className="items-td" role="cell" style={{ color: checkTheme.syntax }}>&#x20A6; {numbro(total).format({ thousandSeparated: true })}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </Card> : <Card style={{ backgroundColor: checkTheme.cardHeader }}>
                            <h3 style={{ textAlign: 'center', fontSize: '30px', backgroundColor: checkTheme.cardHeader, padding: '10px' }}>
                                Customer's Details
                    </h3>
                            <div className="customer-details" style={{ padding: '20px' }}>
                                <p>Name: {customer.fullName}</p>
                                <p>Zone: {destination}</p>
                                <p>Address: {customer.address}</p>
                                <p>Email: {customer.email}</p>
                                <p>Phone_Number: {customer.phoneNumber}</p>
                            </div>

                            <table className="table table-striped order-table table-dark" role="table">
                                <thead role="rowgroup" className="order-heading">
                                    <tr role="row" className="order-row">
                                        <th role="columnheader">Product Name</th>
                                        <th role="columnheader">Size</th>
                                        <th role="columnheader">Price</th>
                                        <th role="columnheader">Qty</th>
                                        <th role="columnheader">Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody role="rowgroup" className="items-tbody">{items}</tbody>
                                <tbody role="rowgroup" className="toppings-tbody">{toppings}</tbody>
                                <tfoot role="rowgroup" className="product-tfoot">
                                    <tr role="row" className="toppings-order">
                                        <td colSpan="5" className="items-td" role="cell" style={{ color: checkTheme.syntax }}>Total</td>
                                        <td className="items-td" role="cell" style={{ color: checkTheme.syntax }}>&#x20A6; {numbro(total).format({ thousandSeparated: true })}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </Card>
                    }
                </Container>

                <ScrollTop />
            </div>
        );

    }

};

export default OrderedProducts;
