import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartCount = () => {
    return (
        <div className="shopping-cart" onClick={() => window.location = '/ShoppingCart'}>
            <FaShoppingCart style={{   fontSize: "50px"}} />
            <span className="cart-count">{props.count || 0}</span>
        </div>
    )
}

export default CartCount
