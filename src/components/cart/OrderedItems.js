import React, { useContext, useEffect, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import numbro from 'numbro';
import { storeContext, getCategory, GET_ORDERED_PRODUCTS, load, LOADING } from '../State/State';
import './ordered.css'
import ScrollTop from '../Home/ScrollTop';

const OrderedItems = (props) => {
    const { id, total } = useParams()
    const { storestate, storedispatch } = useContext(storeContext)
    const { OrderedProduct, User } = storestate
    const products = OrderedProduct
    let items = ""

    useEffect(() => {
        const data = { "action": "none", "data": id, "search": "orderedproducts" }
        getCategory(data, GET_ORDERED_PRODUCTS).then(res => storedispatch(res));
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
                            <td>&#x20A6; {numbro(total).format({thousandSeparated: true})}</td>
                        </tr>
                    </tfoot>
                </table>
                <ScrollTop />
            </div>
        );

    }

};

export default OrderedItems;
