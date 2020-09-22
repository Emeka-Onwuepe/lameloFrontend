import React, { useEffect, useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Container, Row } from 'reactstrap';

import Logo1 from '../../assets/LAMELŌ logo blk.png';
import { storeContext, GET_PIZZA, GET_BFW, GET_GELATOS, GET_SALAD, getCategory, load, LOADING } from "../State/State"


import './Product.css';
import ProductCard from './ProductCard';

const ProductPage = (props) => {
  const { category } = useParams()
  console.log(category)
  let [match] = category.match(/(\w+)/)
  const action = match == "wings" ? 'bfw' : match
  const GET_CATEGORY = (match) => {
    switch (match) {
      case 'pizza':
        return {
          mainCategory: GET_PIZZA,
          heading: "Pizza Menu"
        }
      case 'wings':
        return {
          mainCategory: GET_BFW,
          heading: "Burger, Chicken Wing, Fries Menu"
        }

      case 'salad':
        return {
          mainCategory: GET_SALAD,
          heading: "Salad Menu"
        }
      default:
        return {
          mainCategory: GET_GELATOS,
          heading: "Gelatos Menu"
        }
    }
  }

  const { storestate, storedispatch } = useContext(storeContext)
  const data = { "action": action }
  const { products, prices } = storestate[action]

  const { mainCategory, heading } = GET_CATEGORY(match)

  useEffect(() => {
    console.log(storestate.pizza)
    getCategory(data, mainCategory).then(res => storedispatch(res))
    storedispatch(load(LOADING))
  }, []);

  return (

    <div className="border">
      <div className="pizza-bg">
        <Container fluid>
          <Row>
            <img src={Logo1} alt="logo1" className="logo-pizza" />
          </Row>
          <h1 className="text-center text-color">{heading}</h1>
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

export default ProductPage
