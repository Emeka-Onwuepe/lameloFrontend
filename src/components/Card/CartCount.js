import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { storeContext } from "../State/State"

const CartCount = (props) => {
    const { storestate } = useContext(storeContext)
    const { cart } = storestate

    return (
        <div className="shopping-cart" onClick={() => window.location = '/ShoppingCart'}>
            <FaShoppingCart style={{ fontSize: "50px" }} />
            <span className="cart-count">{cart.length}</span>
        </div>
    )
}

export default CartCount
