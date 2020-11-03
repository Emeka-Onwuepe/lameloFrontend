import React, { useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { storeContext, CLEAR_SUCCESS, locations, AddLogistics, AddDestination } from '../State/State';
import CartItem from './CartItem';
import ToppingItems from "./ToppingItems"
import numbro from 'numbro';
import { Row, Container, Col, Button } from 'reactstrap';
import ScrollTop from '../Home/ScrollTop';

const ShoppingCart = (props) => {
    const { storestate, storedispatch } = useContext(storeContext)
    const { cart, User, logistics, toppingcart } = storestate;
    // const [logistics, setlogistics] = useState(0);
    useEffect(() => {
        storedispatch({ type: CLEAR_SUCCESS });
        locations().then(res => storedispatch(res))
    }, [storedispatch]);

    const itemDisplay = cart.map((product, index) => (<Col lg="4" key={index}><CartItem product={product} /></Col>))
    const toppingsDisplay = toppingcart.map((product, index) => (<Col lg="4" key={index}><ToppingItems product={product} /></Col>))
    let total = 0
    for (const product of cart) {
        let amount = product.price * product.quantity
        total += amount
    }
    for (const product of toppingcart) {
        let amount = product.price * product.quantity
        total += amount
    }
    // const directions = total > 0 && User == "" ? <NavLink to="/login">
    //     <button>Place Order</button></NavLink> : total > 0 && User != "" ? <NavLink to="/confirmOrder"><button>CONFIRM ORDER</button></NavLink> : ""
    // const order = { "product": cart, total }
    const onchange = (e) => {
        // setlogistics(parseInt(e.target.value))
        let data = e.target.value
        const [price, location] = data.split("-")
        storedispatch(AddLogistics(parseInt(price)))
        storedispatch(AddDestination(location))
    }

    return (
        <div className="container-fluid cart-store">
            {User !== undefined && User !== "" ? <div className="userNameDiv">
                <p className="userName" data-aos="fade-up">Welcome, {User.fullName.toUpperCase()} </p>
            </div> : ""}
            <Button onClick={() => props.history.push("/orderhistory")} className="order-history">View Order History</Button>
            <div className="orderListDisplay text-center mt-4">
                <h3>CART</h3>
                {toppingcart.length > 0 ? <Container data-aos="flip-up" data-aos-easing="ease-out-cubic"><Row>{toppingsDisplay}</Row></Container> : ""}
                <Container data-aos="flip-up" data-aos-easing="ease-out-cubic"><Row>{itemDisplay}</Row></Container>
                {total > 0 ? < p className="amount mt-4"><b>Total Amount:  ₦{numbro(total).format({ thousandSeparated: true })}</b></p> : <p data-aos="fade-left">Your Cart is Empty</p>}
                {total > 0 && <p><b>Total and logistics: ₦{numbro(total + logistics).format({ thousandSeparated: true })}</b></p>}
                {/* <p className="directions"> {directions}</p> */}
                {total > 0 && <div data-aos="zoom-in">
                    <label for="logistics">Choose Your Location:</label> &nbsp;
                    <select name="logistics" id="logistics" onChange={onchange}>
                        <option value="0"></option>
                        <option value="0-iwpk">I will pick it up myself</option>
                        {storestate.locations.map((area, index) => <option value={`${area.price}-${area.location}`} key={index}>{`${area.location} Area- ₦${numbro(area.price).format({ thousandSeparated: true })}`}</option>)}
                    </select>
                </div>}<br />
                {total > 0 && <Button onClick={() => props.history.push("/confirmOrder")} className="confirm-btn">CONFIRM ORDER</Button>}
            </div>
            <button className="call-to-action-pizza " onClick={() => props.history.push('/menu')} data-aos="zoom-in-left">Menu</button>
            <ScrollTop />
        </div >
    );
};


// ShoppingCart.propTypes = {

// };


export default ShoppingCart;
