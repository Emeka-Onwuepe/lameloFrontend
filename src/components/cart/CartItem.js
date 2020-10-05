import React, { useContext } from 'react';

import { AiFillDelete } from 'react-icons/ai';
import { MdAdd } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";
import altImage from '../../assets/LAMELŌ pattern blu2.png'



import numbro from 'numbro';
import {
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
        const data = cart.filter(x => x.id !== product.id)
        storedispatch(UpdateCart(data))
    }
    const increment = (e) => {
        e.preventDefault()
        for (const products of cart) {
            if (products.id === product.id) {
                products.quantity += 1
            }
        }
        storedispatch(UpdateCart(cart))
    }
    const decrement = (e) => {
        e.preventDefault()
        for (const products of cart) {
            if (products.id === product.id) {
                if (products.quantity > 1) {
                    products.quantity -= 1
                }
            }
        }
        storedispatch(UpdateCart(cart))
    }
    return (



        <Card className="card-items-page page">
            <CardImg top width="100%" src={product.image.includes('/image') ? altImage : product.image} alt={`img-${product.image}`} height="200px" />
            <CardBody>
                {/* ₦{numbro(parseInt(pizza.price)).format({ thousandSeparated: true })} */}
                <CardTitle><h4>{product.name}</h4></CardTitle>
                <CardSubtitle className="text-center"> <h5>Price: ₦{numbro(product.price).format({ thousandSeparated: true })}</h5></CardSubtitle>
                <CardText className="text-center"><p><b>{product.size ? `Size: ${product.size}` : ''}</b></p><p><b>QTY: {product.quantity}</b></p>
                    <p><b>Total: ₦{numbro(product.quantity * product.price).format({ thousandSeparated: true })}</b></p>
                </CardText>
                <center>
                    <Button onClick={increment} color="success"><MdAdd /></Button>{' '}
                    <Button onClick={decrement} color="primary" className="text-light"><RiSubtractFill /></Button>{' '}
                    <Button onClick={deleteItem} color="danger"><AiFillDelete />Remove</Button>
                </center>
            </CardBody>
        </Card>
    )
};



export default CartItem;
