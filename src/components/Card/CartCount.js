import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartCount = (props) => {
    return (
        <div className="shopping-cart" onClick={() => window.location = '/ShoppingCart'}>
            <FaShoppingCart style={{   fontSize: "50px"}} />
            <span className="cart-count">{props.count}</span>
        </div>
    )
}

export default CartCount
