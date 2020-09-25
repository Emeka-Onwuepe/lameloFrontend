import React, { useContext, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { storeContext, CLEAR_SUCCESS } from '../State/State';
import CartItem from './CartItem';
import numbro from 'numbro';
import { Row, Container, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
const ShoppingCart = (props) => {
    const { storestate, storedispatch } = useContext(storeContext)
    const { cart, User, Ordered } = storestate;
    useEffect(() => {
        storedispatch({ type: CLEAR_SUCCESS })
    }, []);

    const itemDisplay = cart.map((product) => (<Col lg="4"><CartItem product={product} /></Col>))
    let total = 0
    for (const product of cart) {
        let amount = product.price * product.quantity
        total += amount
    }
    // const directions = total > 0 && User == "" ? <NavLink to="/login">
    //     <button>Place Order</button></NavLink> : total > 0 && User != "" ? <NavLink to="/confirmOrder"><button>CONFIRM ORDER</button></NavLink> : ""
    const order = { "product": cart, total }

    return (
        <Fragment className="cart-store">
            {User.user !== undefined && User.user !== "" ? <div className="userNameDiv">
                <p className="userName">Welcome, {`${User.user.first_name.toUpperCase()} ${User.user.last_name.toUpperCase()}`} </p>
            </div> : ""}
            <NavLink to='/orderhistory'>Order History</NavLink>
            <div className="orderListDisplay text-center mt-4">
                <h3>CART</h3>
                <Container><Row>{itemDisplay}</Row></Container>
                < p className="amount mt-4"><b>Total Amount:  ₦{numbro(total).format({ thousandSeparated: true })}</b></p>
                {/* <p className="directions"> {directions}</p> */}
                <Button onClick={() => props.history.push("/confirmOrder")} className="confirm-btn">CONFIRM ORDER</Button>
            </div>
            <button className="call-to-action-pizza " onClick={() => props.history.push('/menu')}>Menu</button>

        </Fragment >
    );
};


// ShoppingCart.propTypes = {

// };


export default ShoppingCart;
