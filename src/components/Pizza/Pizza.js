import React, { useEffect, useContext } from 'react';

import { Container, Row } from 'reactstrap';

import Logo1 from '../../assets/LAMELŌ logo blk.png';
import { storeContext, GET_PIZZA, getCategory, load, LOADING } from "../State/State"


import './Pizza.css';
import ProductCard from '../Card/ProductCard';

const Pizza = (props) => {
  const { storestate, storedispatch } = useContext(storeContext)
  const data = { "action": "Pizza" }
  const { products, prices } = storestate.pizza

  useEffect(() => {
    console.log(storestate.pizza)
    getCategory(data, GET_PIZZA).then(res => storedispatch(res))
    storedispatch(load(LOADING))
  }, []);

  return (

    <div className="border">
      <div className="pizza-bg">
        <Container fluid>
          <Row>
            <img src={Logo1} alt="logo1" className="logo-pizza" />
          </Row>
          <h1 className="text-center text-color">Pizza Menu</h1>
          <div className="divider-center" ></div>
          <div className="pizza-definations">
            <p>
              Chicken Pizza, Meat Lover, Lamelo Special, Sicilian Pizza, Fahita Pizza, Hawai Pizza, Seafood Pizza, Beef Pizza, BBQ Chicken Pizza, Vegetable Pizza
                         </p>
          </div>
          <div className="product-cards"><ProductCard products={products} prices={prices} /></div>
        </Container>

      </div>
      <button className="call-to-action-pizza " onClick={() => props.history.push('/menu')}>Menu</button>
    </div>
  )
}

export default Pizza
