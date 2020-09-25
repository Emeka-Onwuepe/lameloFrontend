import React, { useEffect, useState, useContext } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Card, CardImg, CardText,
    CardBody, CardTitle, Row,
    Col, Container, Alert,
    Button
} from 'reactstrap';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import numbro from 'numbro';
import { storeContext, addToCart, load, LOADING } from '../State/State';

const animatedComponents = makeAnimated();


const ProductCard = ({ products, prices }) => {

    const [DivDisplay, setDivdisplay] = useState({ display: false, check: false })
    const [priceState, setpriceState] = useState([])
    let check = false;

    const { storestate, storedispatch } = useContext(storeContext)
    useEffect(() => {
        console.log("cart changed")
        console.log(priceState)


    }, [storestate.cart]);

    const initial = { display: false, check: false }
    const filter = (array, price) => {
        let items = []
        array.forEach(id => {
            let [match] = price.filter(price => id == price.id)
            items.push(match)
        })
        return items
    }

    const spliter = (id) => {
        let array = id.split("-")
        let [priceID, productId] = array
        return { priceID: parseInt(priceID), productId: parseInt(productId) }
    }


    const decisionBox = () => toast.info(<div className="decisionBox">
       <p>Choose either to continue shopping or to view your shopping cart by checking out</p><br/>
       <div className="btns-checkout">
        <Button onClick={() => { setDivdisplay(initial) }} color="success">Continue Shopping</Button>
        <Button onClick={() => window.location = "/ShoppingCart"} style={{backgroundColor: 'orangered', border: 'none'}}>Check Out</Button> 
        </div>
    </div>, {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
    const alreadyInCart = () => toast.error(<div className="decisionBox" >
        <p style={{ color: "white"}}>Item already in Cart</p>
       <div className="btns-checkout"> <Button onClick={() => { setDivdisplay(initial) }} color="success">Continue Shopping</Button>
        <Button onClick={() => window.location = "/ShoppingCart"} style={{backgroundColor: 'orangered', border: 'none'}}>Check Out </Button>
        </div>
    </div>, {
    position: "top-center",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })


    const onChange = (e) => {
        // const { priceID, productId } = spliter(e.target.id)
        let value = []
        let stateArry = []
        try {
            value = e.map(item => item.value)
        } catch (err) {
        }
        value.forEach(item => {
            console.log(priceState)
            let [price] = prices.filter(x => x.id == item)
            // console.log(price)
            // price = e.target.value
            // let [rest] = prices.filter(x => x.id != item)
            // let check = priceState.filter(item => item.id == price.id)
            let check = stateArry.filter(item => item.id == price.id)
            if (check.length == 0) {
                // setpriceState([...priceState, price])
                stateArry.push(price)
                setpriceState(stateArry)
            }
        })
    }

    const onClick = (e) => {
        const id = e.target.id
        console.log(id)
        let [product] = products.filter(product => product.id == id)
        let check = false;
        if (product.multipleSIzes.length > 0) {
            if (priceState.length > 0) {
                setDivdisplay({ display: true })
                // let filtered = priceState.filter(x => x.checked == true)
                for (const index of priceState) {
                    const data = { id: parseInt(`${product.id}${index.id}`), Id: product.id, name: product.name, flavour: product.flavour, price: index.price, size: index.size, quantity: 1, image: product.image }
                    storestate.cart.forEach(x => {
                        if (x.id == data.id) {
                            check = true
                            setDivdisplay({ display: true, check: true })
                        }
                    })
                    if (check != true) {
                        storedispatch(addToCart(data))
                    }
                    setpriceState([])
                }
            }else{
                alert("please select size(s) ")
            }
        } else if (product.multipleSIzes.length == 0) {
            setDivdisplay({ display: true })
            storestate.cart.forEach(x => {
                if (x.id == id) {
                    check = true
                    setDivdisplay({ display: true, check: true })
                }
            })
            if (check != true) {
                const data = { id: product.id, Id: product.id, name: product.name, flavour: product.flavour, price: product.price, quantity: 1, image: product.image }
                storedispatch(addToCart(data))
            }
        }
    }

    return (
        <Container>
            <Row>
                {
                    
                    (products && products.length > 0) ? products.map((pizza, index) => (
                      

                        <Col lg="4" key={index}>
                            <Card className="card-container">
                                <CardImg top width="95%" src={pizza.image} alt={`pizza-image-${pizza.image}`} height={200} />
                                <CardBody>
                                    <CardTitle><h3>{pizza.name}</h3></CardTitle>

                                    {pizza.price === 0 && prices.length > 0 ?
                                        <>
                                            <Select closeMenuOnSelect={false} components={animatedComponents} onChange={onChange} placeholder="Select Product Sizes..." isMulti options={filter(pizza.multipleSIzes, prices).map((item) => ({ value: item.id, label: `Size:${item.size}- ₦${numbro(parseInt(item.price)).format({ thousandSeparated: true })}` }))
                                            } /><br /></>
                                        : <p><b>Price:</b> <span>₦{numbro(parseInt(pizza.price)).format({ thousandSeparated: true })}</span></p>}
                                    <CardText style={{ "color": "black" }}>{pizza.description}</CardText>
                                </CardBody>
                            </Card>
                            <div>
                                <button id={pizza.id} className="button-cart" onClick={onClick}>ADD TO CART</button>
                            </div>
                      
                        </Col>
                    )) : <Alert>Failed to load items</Alert>
                   
                }
                <>
                    {DivDisplay.check && DivDisplay.display ? alreadyInCart() : DivDisplay.display ? decisionBox() : ""}
                    <ToastContainer position="top-center"
                        autoClose={10000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </>
            </Row>
        </Container>
    );
};

export default ProductCard;
