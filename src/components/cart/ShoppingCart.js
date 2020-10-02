import React, { useContext, useEffect, useState } from 'react';

// import PropTypes from 'prop-types';
import { storeContext, CLEAR_SUCCESS, locations, AddLogistics } from '../State/State';
import CartItem from './CartItem';
import numbro from 'numbro';
import { Row, Container, Col, Button } from 'reactstrap';

const ShoppingCart = (props) => {
    const { storestate, storedispatch } = useContext(storeContext)
    const { cart, User, logistics } = storestate;
    // const [logistics, setlogistics] = useState(0);
    useEffect(() => {
        storedispatch({ type: CLEAR_SUCCESS });
        locations().then(res => storedispatch(res))
    }, [storedispatch]);

    const itemDisplay = cart.map((product, index) => (<Col lg="4" key={index}><CartItem product={product} /></Col>))
    let total = 0
    for (const product of cart) {
        let amount = product.price * product.quantity
        total += amount
    }
    // const directions = total > 0 && User == "" ? <NavLink to="/login">
    //     <button>Place Order</button></NavLink> : total > 0 && User != "" ? <NavLink to="/confirmOrder"><button>CONFIRM ORDER</button></NavLink> : ""
    // const order = { "product": cart, total }
    const onchange = (e) => {
        // setlogistics(parseInt(e.target.value))
        storedispatch(AddLogistics(parseInt(e.target.value)))
    }

    return (
        <div className="cart-store">
            {User !== undefined && User !== "" ? <div className="userNameDiv">
                <p className="userName">Welcome, {User.fullName.toUpperCase()} </p>
            </div> : ""}
            <Button onClick={() => props.history.push("/orderhistory")} className="order-history">View Order History</Button>
            <div className="orderListDisplay text-center mt-4">
                <h3>CART</h3>
                <Container><Row>{itemDisplay}</Row></Container>
                {total > 0 ? < p className="amount mt-4"><b>Total Amount:  ₦{numbro(total).format({ thousandSeparated: true })}</b></p> : <p>Your Cart is Empty</p>}
                {total > 0 && <p>Total and logistics: {total + logistics}</p>}
                {/* <p className="directions"> {directions}</p> */}
                {total > 0 && <div>
                    <label for="cars">Choose Your Location:</label>
                    <select name="logistics" id="logistics" onChange={onchange}>
                        <option value="0"></option>
                        <option value="0">I will pick it up myself</option>
                        {storestate.locations.map(area => <option value={area.price}>{`${area.location}-${area.price}`}</option>)}
                    </select>
                </div>}
                {total > 0 && <Button onClick={() => props.history.push("/confirmOrder")} className="confirm-btn">CONFIRM ORDER</Button>}
            </div>
            <button className="call-to-action-pizza " onClick={() => props.history.push('/menu')}>Menu</button>

        </div >
    );
};


// ShoppingCart.propTypes = {

// };


export default ShoppingCart;
