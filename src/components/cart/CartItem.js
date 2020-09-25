import React, { useContext } from 'react';
// import PropTypes from 'prop-types';

import { AiFillDelete } from 'react-icons/ai';
import { MdAdd } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";



import numbro from 'numbro';
import {
    Container,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { storeContext, UpdateCart } from '../State/State';
import "./CartItems.css"


const CartItem = (props) => {
    const product = props.product
    const { storestate, storedispatch } = useContext(storeContext);
    const { cart } = storestate
    const deleteItem = (e) => {
        e.preventDefault()
        const data = cart.filter(x => x.id != product.id)
        storedispatch(UpdateCart(data))
    }
    const increment = (e) => {
        e.preventDefault()
        for (const products of cart) {
            if (products.id == product.id) {
                products.quantity += 1
            }
        }
        storedispatch(UpdateCart(cart))
    }
    const decrement = (e) => {
        e.preventDefault()
        for (const products of cart) {
            if (products.id == product.id) {
                if (products.quantity > 1) {
                    products.quantity -= 1
                }
            }
        }
        storedispatch(UpdateCart(cart))
    }
    return (
        <Container>

            <div className="item-container">
                <Card>
                    <CardImg top width="100%" src={product.image} alt={`img-${product.image}`} height="200px" />
                    <CardBody>
                        {/* ₦{numbro(parseInt(pizza.price)).format({ thousandSeparated: true })} */}
                        <CardTitle><h4>{product.name}</h4></CardTitle>
                        <CardSubtitle className="text-center"> <h5>Price: ₦{numbro(product.price).format({ thousandSeparated: true })}</h5></CardSubtitle>
                        <CardText className="text-center"><p><b>Size: {product.size}</b></p><p><b>QTY: {product.quantity}</b></p>
                            <p><b>QTY: {product.flavour}</b></p>
                            <p><b>Total: {product.quantity * product.price}</b></p>
                        </CardText>
                        <center>
                            <Button onClick={increment} color="success"><MdAdd /></Button>{' '}
                            <Button onClick={decrement} color="primary" className="text-light"><RiSubtractFill /></Button>{' '}
                            <Button onClick={deleteItem} color="danger"><AiFillDelete /> delete</Button>
                        </center>
                    </CardBody>
                </Card>
            </div>
        </Container>
    )
};


CartItem.propTypes = {

};


export default CartItem;
