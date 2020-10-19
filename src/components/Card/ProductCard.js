import React, { useEffect, useState, useContext } from 'react';
// import { NavLink, Link, useParams } from 'react-router-dom';

import altImage from '../../assets/LAMELŌ pattern blu2.png'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PacmanLoader } from 'react-spinners';
import {
    Card, CardImg, CardText,
    CardBody, CardTitle, Row,
    Col, Container,
    Button
} from 'reactstrap';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import numbro from 'numbro';
import { storeContext, addToCart, addToToppingCart } from '../State/State';
// import { DriveEtaSharp } from '@material-ui/icons';

const animatedComponents = makeAnimated();


const ProductCard = ({ products, prices, toppings }) => {

    const [DivDisplay, setDivdisplay] = useState({ display: false, check: false })
    const [priceState, setpriceState] = useState([])
    const [toppingState, setToppingState] = useState([])
    const [checkboxState, setcheckboxState] = useState([])
    // let check = false;
    const { storestate, storedispatch } = useContext(storeContext)
    useEffect(() => {
    }, [storestate.cart, storestate.toppingcart]);

    useEffect(() => {
        let checkbox = document.querySelectorAll(".checkbox")
        setcheckboxState(checkbox)
    }, []);

    const initial = { display: false, check: false }
    const filter = (array, price) => {
        let items = []
        array.forEach(id => {
            let [match] = price.filter(price => id === price.id)
            items.push(match)
        })
        return items
    }

    // const spliter = (id) => {
    //     let array = id.split("-")
    //     let [priceID, productId] = array
    //     return { priceID: parseInt(priceID), productId: parseInt(productId) }
    // }

    const decisionBox = () => toast.success(<div className="decisionBox">
        <p>Choose either to continue shopping or to view your shopping cart by checking out</p><br />
        <div className="btns-checkout">
            <Button onClick={() => { setDivdisplay(initial) }} color="success">Continue Shopping</Button>
            <Button onClick={() => window.location = "/ShoppingCart"} color="info">Check Out</Button>
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
    const alreadyInCart = () => toast.info(<div className="decisionBox" >
        <p style={{ color: "white" }}>Item already in Cart</p>
        <div className="btns-checkout"> <Button onClick={() => { setDivdisplay(initial) }} color="success">Continue Shopping</Button>
            <Button onClick={() => window.location = "/ShoppingCart"} color="info">Check Out </Button>
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

    const onChangeCheckBox = (e) => {
        //get selected
        let [selected] = toppings.filter(x => x.id == e.target.id)
        selected.checked = e.target.checked
        selected.quantity = 1
        let rest = toppings.filter(x => x.id != e.target.id)
        let Alltoppings = rest.concat(selected)
        let selectedToppings = Alltoppings.filter(x => x.checked == true)
        setToppingState(selectedToppings)
        // setpriceState([price, rest])
    }

    const onSubmit = () => {
        let check = false
        console.log(toppingState)
        if (toppingState.length > 0) {
            setDivdisplay({ display: true })
            for (const index of toppingState) {
                check = false
                storestate.toppingcart.forEach(x => {
                    console.log(x.id, index.id)
                    if (x.id == index.id) {
                        check = true
                        setDivdisplay({ display: true, check: true })
                    }
                })
                if (check !== true) {
                    console.log(toppingState)
                    storedispatch(addToToppingCart(index))
                }
            }
        }
        setToppingState([])
        checkboxState.forEach(x => {
            x.checked = false
        })
        toppings.forEach(x => {
            x.checked = false
        })
    }

    const onChange = (e) => {
        // const { priceID, productId } = spliter(e.target.id)
        let value = []
        let stateArry = []
        try {
            value = e.map(item => item.value)
        } catch (err) {
        }
        value.forEach(item => {
            let [price] = prices.filter(x => x.id === item)

            let check = stateArry.filter(item => item.id === price.id)
            if (check.length === 0) {
                stateArry.push(price)
                setpriceState(stateArry)
            }
        })
    }

    const onClick = (e) => {
        const id = e.target.id
        let [product] = products.filter(product => product.id == id);

        let check = false;
        if (product.multipleSIzes.length > 0) {
            if (priceState.length > 0) {
                setDivdisplay({ display: true })
                for (const index of priceState) {
                    const data = { id: parseInt(`${product.id}${index.id}`), Id: product.id, name: product.name, flavour: product.flavour, price: index.price, size: index.size, quantity: 1, image: product.image }
                    storestate.cart.forEach(x => {
                        if (x.id === data.id) {
                            check = true
                            setDivdisplay({ display: true, check: true })
                        }
                    })
                    if (check !== true) {
                        storedispatch(addToCart(data))
                    }
                    setpriceState([])
                }
            } else {
                toast.warn("please select size(s) ", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        } else if (product.multipleSIzes.length === 0) {
            setDivdisplay({ display: true })
            storestate.cart.forEach(x => {
                if (x.id === id) {
                    check = true
                    setDivdisplay({ display: true, check: true })
                }
            })
            if (check !== true) {
                const data = { id: product.id, Id: product.id, name: product.name, flavour: product.flavour, price: product.price, quantity: 1, image: product.image }
                storedispatch(addToCart(data))
            }
        }
    }

    return (
        <Container>

            <Row>
                {toppings.length > 0 ? <div style={{ textAlign: 'center', backgroundColor: '#4CAF50', zIndex: '1000', border: '3px solid #4CAF50', padding: '20px', marginBottom: '10px' }} className="toppings-style" data-aos="flip-left">
                    <h3 className="toppings-heading">Choose Your Own Toppings</h3>
                    <div className="toppings-divider" />
                    <Row>
                        {toppings.length > 0 ? toppings.map(topping => <div style={{ margin: '5px', textAlign: 'center' }}>
                            <input type="checkbox" name={topping.topping} className="checkbox" id={topping.id} onClick={onChangeCheckBox} value={topping.price} />&nbsp;
                    <label htmlFor={topping.topping}>{topping.topping} - ₦{numbro(parseInt(topping.price)).format({ thousandSeparated: true })}</label>
                        </div>
                        ) : ""
                        }
                    </Row>
                    <Button style={{ padding: '20px', background: 'green', borderRadius: '50px', border: 'none', textTransform: 'uppercase' }} onClick={onSubmit}>Add Toppings</Button>
                </div> : ""}
                {

                    (products && products.length > 0) ? products.map((pizza, index) => (


                        <Col lg="4" key={index}>

                            <Card className="card-container" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                                <CardImg top width="95%" src={pizza.image.includes('/image') ? altImage : pizza.image} alt={`pizza-image-${pizza.image}`} height={200} />
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
                                <button id={pizza.id} className="button-cart" onClick={onClick} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">ADD TO CART</button>
                            </div>

                        </Col>
                    )) : <div style={{ display: 'flex', justifyContent: 'center' }}><PacmanLoader loading size={60} style={{ zIndex: '300' }} color="red" /></div>

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
        </Container >
    );
};

export default ProductCard;
