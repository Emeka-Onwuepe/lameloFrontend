import React, { useContext, useEffect, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { NavLink, useParams, Redirect } from 'react-router-dom';
import { storeContext, getCategory, GET_ORDERED_PRODUCTS, load, LOADING, LOADED } from '../State/State';
import './ordered.css'

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
        console.log(products)
    }, [])
    if (products != undefined && products.length > 0) {
        items = products.map(item => <tr key={item.id}>
            <td>{item.name} </td>
            <td>{item.flavour} </td>
            <td>{item.size} </td>
            <td>{item.price} </td>
            <td>{item.quantity} </td>
            <td>{item.price * item.quantity} </td>
        </tr>)
    }
    // if (storestate.User == "") {
    //     return < Redirect to="/ShoppingCart" />
    // }

    if (items == "") {
        return <Fragment>HELLO</Fragment>

    } else {

        return (
            <Fragment>
                {User.user !== undefined && User.user !== "" ? <div className="userNameDiv">
                    <p className="userName">Welcome, {`${User.user.first_name.toUpperCase()} ${User.user.last_name.toUpperCase()}`} </p>
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
                    {items}
                    <tfoot>
                        <tr>
                            <td colspan="5">Total</td>
                            <td>&#x20A6; {total}</td>
                        </tr>
                    </tfoot>
                </table>
            </Fragment>
        );

    }

};


// OrderedItems.propTypes = {

// };


export default OrderedItems;
