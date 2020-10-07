import React, { useEffect, useContext, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Container } from 'reactstrap';

import Logo1 from '../../assets/LAMELŌ logo blk.png';
import { storeContext, GET_PIZZA, GET_BFW, GET_GELATOS, GET_SALAD, getCategory, load, LOADING } from "../State/State"

import './Product.css';
import ProductCard from './ProductCard';
import CartCount from './CartCount';


// kick off the polyfill!

const ProductPage = (props) => {

  // const [scrollY, setscrolly] = useState(-250);
  // const myDiv= useRef();
  // useEffect(() => {
  //   const div = document.querySelector(".container-fluid")
  //   div.scrollTo("", 100)
  // }, [scrollY]);


  // function scrollDiv() {
  //   const div = document.querySelector(".container-fluid")
  //   setscrolly(scrollY - 250)
  //   div.style.marginTop = `${scrollY}px`;

  //   document.getElementById("scroll").scrollTop += 100;
  //   console.log(window.pageYOffset)
  // }
  const { category } = useParams()
  let [match] = category.match(/(\w+)/)
  const action = match === "wings" ? 'bfw' : match
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
  const data = { "action": action, "data": "", "search": "" }
  const { products, prices } = storestate[action]

  const { mainCategory, heading } = GET_CATEGORY(match)

  useEffect(() => {
    // console.log(storestate.pizza)
    getCategory(data, mainCategory).then(res => storedispatch(res))
    storedispatch(load(LOADING))
  }, []);
  // console.log(storestate.scrow)
  // console.log(window.pageYOffset)
  
  return (

    <div className="pizza-bg">
         <div className="overlay"></div>
          <div className="product-align">
            <Link to="/" className="home"><img src={Logo1} alt="logo1" className="logo-pizza" /></Link>
            <h1 className="text-center text-color">{heading}</h1>
            <div className="divider-center" ></div>
    
            <div className="product-cards"><ProductCard products={products} prices={prices} /></div>
          </div>
          <div className="down-btn-menu" ><span>Scroll Down</span><br /><FaArrowDown className="scroll-arrow-menu"/></div>
        <CartCount />
      <button className="call-to-action-pizza " onClick={() => props.history.push('/menu')}>Menu</button>

  


    </div>
  )
}

export default ProductPage
