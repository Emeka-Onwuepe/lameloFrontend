import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Logo1 from '../assets/LAMELŌ logo blk.png';
import bgImg from '../assets/LAMELŌ pattern grn.png';
import pizzaImg from '../Pizza/images/pexels-engin-akyurt-2619967.jpg';
import pizzaImg2 from '../Pizza/images/pexels-pablo-macedo-845802.jpg';
import pizzaImg3 from '../Pizza/images/pexels-engin-akyurt-1552635.jpg';
import './Pizza.css';

const Pizza = (props) => {
   const [getPizza, setGetPizza] = useState("");

   useEffect(() => {
     let variables = {
        "action": "Pizza"
     }
      axios.get("https://cors-anywhere.herokuapp.com/http://lameloapi.herokuapp.com/getproducts", variables, {"Content-Type": "application/json"})
        .then(res => {
            console.log(res.data)
        })
   })
    return (
        <div id="background">
            <div className="center-items-pizza">
               <img src={Logo1} alt="logo1" className="logo-1"/>
               <h1 className="htext-pizza">Pizza Menu</h1>
               <div className="divider"></div>
               <p className="ptext-pizza">Our Pizza is the best in town<br/>We are experts in what we do.</p>
              
            </div>
           
            <div className="content" id="bg1">
           
           <img src={bgImg} className="bg-img1" alt="bg-img"/>
            <div>
              <button className="call-to-action-pizza" onClick={() => props.history.push('/menu')}>Menu</button>
              
            </div>
           

              <div className="color-overlay-pizza"></div>
        </div>
           <div className="cards-container">
              <div className="card-grid">
                <div className="card">
                  <img src={pizzaImg} alt="pizza-images"  className="responsive"/>
                   <div className="details">
                      <h3>Chicken BBQ Pizza</h3>
                      <span><strong>description</strong></span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, placeat.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, placeat.
                      </p>
                      <button className="addtocart">add to cart</button>
                   </div>
                   
                </div>
                <div className="card"><img src={pizzaImg2} alt="pizza-images"  className="responsive"/>
                <div className="details">
                      <h3>Sea Food Special Pizza</h3>
                      <span><strong>description</strong></span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, placeat.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, placeat.
                      </p>
                      <button className="addtocart">add to cart</button>
                   </div>
                </div>
                <div className="card"><img src={pizzaImg3} alt="pizza-images"  className="responsive"/>
                  <div className="details">
                      <h3>Chicken BBQ Pizza</h3>
                      <span><strong>description</strong></span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, placeat.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, placeat.
                      </p>
                      <button className="addtocart">add to cart</button>
                   </div>
                </div>
                <div className="card">
                  <img src={pizzaImg} alt="pizza-images"  className="responsive"/>
                   <div className="details">
                      <h3>Chicken BBQ Pizza</h3>
                      <span><strong>description</strong></span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, placeat.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, placeat.
                      </p>

                      <button className="addtocart">add to cart</button>
                   </div>
                   
                </div>
                <div className="card"><img src={pizzaImg2} alt="pizza-images"  className="responsive"/>
                <div className="details">
                      <h3>Chicken BBQ Pizza</h3>
                      <span><strong>description</strong></span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, placeat.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, placeat.
                      </p>
                      <button className="addtocart">add to cart</button>
                   </div>
                </div>
                <div className="card"><img src={pizzaImg3} alt="pizza-images"  className="responsive"/>
                  <div className="details">
                      <h3>Chicken BBQ Pizza</h3>
                      <span><strong>description</strong></span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, placeat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, placeat.
                      </p>
                      <button className="addtocart">add to cart</button>
                   </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Pizza
