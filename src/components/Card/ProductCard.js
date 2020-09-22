import React, { useEffect, useState, useContext } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col, Container, Alert
} from 'reactstrap';
import numbro from 'numbro';
import { storeContext, addToCart, load, LOADING } from '../State/State';


const ProductCard = ({ products, prices }) => {
    const [Display, setDisplay] = useState(false)
    const [DivDisplay, setDivdisplay] = useState({ display: false, check: false })
    const [priceState, setpriceState] = useState([])
    let check = false;
    const Style = {
        "border": "1px #dadada solid",
        "display": Display ? "block" : "none",
    }

    useEffect(() => {
    }, [Display]);
    const { storestate, storedispatch } = useContext(storeContext)
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


    const decisionBox = <div className="decisionBox">
        <p>Choose either to continue shopping or to view your shopping cart by checking out</p>
        <button onClick={() => { setDivdisplay(initial) }}>Continue Shopping</button>
        <NavLink to="/ShoppingCart"><button>Check Out</button> </NavLink>
    </div>
    const alreadyInCart = <div className="decisionBox" >
        <p style={{ color: "red", marginLeft: "50px" }}>Item already in Cart</p>
        <button onClick={() => { setDivdisplay(initial) }}>Continue Shopping</button>
        <NavLink to="/ShoppingCart"><button>Check Out</button> </NavLink>
    </div>

    const OnClick = (e) => {
        setDisplay(!Display)
    }
    const onChange = (e) => {
        const { priceID, productId } = spliter(e.target.id)

        let [price] = prices.filter(x => x.id == priceID)
        price.checked = e.target.checked
        let [rest] = prices.filter(x => x.id != priceID)
        setpriceState([price, rest])
        console.log(priceState)
    }

    const onClick = (e) => {
        const id = e.target.id
        let [product] = products.filter(product => product.id == id)
        let check = false;
        if (product.multipleSIzes.length > 0) {
            if (priceState.length > 0) {
                setDivdisplay({ display: true })
                let filtered = priceState.filter(x => x.checked == true)
                for (const index of filtered) {
                    const data = { id: parseInt(`${product.id}${index.id}`), Id: product.id, name: product.name, brand: product.brand, price: index.price, size: index.size, quantity: 1, image: product.image }
                    storestate.cart.forEach(x => {
                        if (x.id == data.id) {
                            check = true
                            setDivdisplay({ display: true, check: true })
                        }
                    })
                    if (check != true) {
                        storedispatch(addToCart(data))
                    }

                }
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
                const data = { id: product.id, Id: product.id, name: product.name, brand: product.brand, price: product.price, quantity: 1, image: product.image }
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
                                <CardImg top width="95%" src={pizza.image} alt={`pizza-image-${pizza.image}`} height={250} />
                                <CardBody>
                                    <CardTitle><h3>{pizza.name}</h3></CardTitle>
                                    <CardText style={{ "color": "black" }}>{pizza.description}</CardText>
                                    {pizza.price === 0 && <p className="size-description">Please Select the Size You Need</p>}
                                    {pizza.price === 0 && prices.length > 0 ?

                                        <div class="multiselect">
                                            <div class="selectBox" onClick={OnClick}>
                                                <select>
                                                    <option>Select an option</option>
                                                </select>
                                                <div class="overSelect"></div>
                                            </div>
                                            <div id="checkboxes" style={Style}>
                                                {filter(pizza.multipleSIzes, prices)
                                                    .map((item, index) => (
                                                        <div>
                                                            <input type="checkbox" onChange={onChange} className="checks" id={`${item.id}-${pizza.id}`} />
                                                            <label><span>Size:</span> <span>{item.size} - </span> <span>₦{numbro(parseInt(item.price)).format({ thousandSeparated: true })}</span></label>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                        : <p><b>Price:</b> <span>₦{numbro(parseInt(pizza.price)).format({ thousandSeparated: true })}</span></p>}
                                </CardBody>
                            </Card>
                            <div>
                                <button id={pizza.id} onClick={onClick}>ADD TO CART</button>
                // {DivDisplay.check && DivDisplay.display ? alreadyInCart : DivDisplay.display ? decisionBox : ""}
                            </div>
                        </Col>
                    )) : <Alert>Failed to load items</Alert>
                }

            </Row>
        </Container>
    );
};

export default ProductCard;
