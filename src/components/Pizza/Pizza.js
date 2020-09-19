import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Row } from 'reactstrap';

import Logo1 from '../../assets/LAMELŌ logo blk.png';



import './Pizza.css';
import PizzaCard from './PizzaCard';

const Pizza = (props) => {
   const [getPizza, setGetPizza] = useState("");

   
   const fetchProducts = () => {
    let variables = {
      "action": "Pizza"
   }
    axios.post("http://lameloapi.herokuapp.com/getproducts", variables, {headers: {"Content-Type": "application/json"}})
      .then(res => {
        if(res.data) {
          setGetPizza(res.data.Pizza)
        }else {
           alert(`Failed to fetch products`)
        }
         
      }).catch(err => {
         console.log(err)
      })
  
    }

   useEffect(() => {
       fetchProducts()
   }, []);

    return (

      <div className="border">
              <div className="pizza-bg">
                 <Container fluid>
                   <Row>
                        <img src={Logo1} alt="logo1" className="logo-pizza"/>
                    </Row>
                      <h1 className="text-center text-color">Pizza Menu</h1>
                      <div className="divider-center" ></div>
                      <div className="pizza-definations">
                        <p>
                           Chicken Pizza, Meat Lover, Lamelo Special, Sicilian Pizza, Fahita Pizza, Hawai Pizza, Seafood Pizza, Beef Pizza, BBQ Chicken Pizza, Vegetable Pizza
                         </p>
                      </div>
                      <div className="product-cards"><PizzaCard pizzas={getPizza}/></div>
                  </Container>
             
              </div>
              <button className="call-to-action-pizza " onClick={() => props.history.push('/menu')}>Menu</button>
        </div>
    )
}

export default Pizza
