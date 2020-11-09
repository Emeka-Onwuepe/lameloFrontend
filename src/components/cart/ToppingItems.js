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
import { storeContext, Updatetoppingcart } from '../State/State';
import "./CartItems.css"


const ToppingItems = (props) => {
    const product = props.product
    const { storestate, storedispatch } = useContext(storeContext);
    const { toppingcart } = storestate
    const deleteItem = (e) => {
        e.preventDefault()
        const data = toppingcart.filter(x => x.id !== product.id)
        console.log(data)
        storedispatch(Updatetoppingcart(data))
    }
    const increment = (e) => {
        e.preventDefault()
        for (const products of toppingcart) {
            if (products.id == product.id) {
                products.quantity += 1
            }
        }
        console.log(toppingcart)
        storedispatch(Updatetoppingcart(toppingcart))
    }
    const decrement = (e) => {
        e.preventDefault()
        for (const products of toppingcart) {
            if (products.id == product.id) {
                if (products.quantity > 1) {
                    products.quantity -= 1
                }
            }
        }
        storedispatch(Updatetoppingcart(toppingcart))
    }
    return (
        <Card className="page" style={{height: '170px'}}>
            <CardBody>
                <CardTitle><h4>{product.topping}</h4></CardTitle>
                <CardSubtitle className="text-center"> <h5>Price: ₦{numbro(product.price).format({ thousandSeparated: true })}</h5></CardSubtitle>
                <CardSubtitle className="text-center"> <h5>Qty: {product.quantity}</h5></CardSubtitle>
                <center>
                    <Button onClick={increment} color="success"><MdAdd /></Button>{' '}
                    <Button onClick={decrement} color="primary" className="text-light"><RiSubtractFill /></Button>{' '}
                    <Button onClick={deleteItem} color="danger"><AiFillDelete />Remove</Button>
                </center>
            </CardBody>
        </Card>
    )
};

export default ToppingItems;
