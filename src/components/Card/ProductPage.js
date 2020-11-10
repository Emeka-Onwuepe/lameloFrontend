import React, { useEffect, useContext, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { Container } from 'reactstrap';

import Logo1 from '../../assets/LAMELŌ logo blk.png';
import { storeContext, GET_PIZZA, GET_BFW, GET_GELATOS, GET_SALAD, GET_PLATTER, getCategory, load, LOADING } from "../State/State"

import './Product.css';
import ProductCard from './ProductCard';
import CartCount from './CartCount';
import ScrollTopMenu from '../Menu/ScrollTopMenu';


// kick off the polyfill!

const ProductPage = (props) => {

  const scrollToBottom = () => window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  })
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
      case 'platter':
        return {
          mainCategory: GET_PLATTER,
          heading: "Platter Menu"
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
  const { products, prices, toppings } = storestate[action]

  const { mainCategory, heading } = GET_CATEGORY(match)

  useEffect(() => {
    getCategory(data, mainCategory).then(res => storedispatch(res))
    storedispatch(load(LOADING))
  }, []);
  // console.log(storestate.scrow)
  // console.log(window.pageYOffset)
  const style = {
    "color": "white",
    "textAlign": "center",
    "fontSize": "18px",
    "zIndex": 300,
    "position": "relative",
    "marginBottom": "20px"
  }

  return (

    <div className="pizza-bg">
      <div className="overlay"></div>
      <div className="product-align">
        <Link to="/" className="home"><img src={Logo1} alt="logo1" className="logo-pizza" data-aos="fade-right" /></Link>
        <h1 className="text-center text-color" data-aos="zoom-in">{heading}</h1>
        <div className="divider-center" ></div>
        {heading == "Gelatos Menu" ? <div style={style}>It is preferrable not to order Ice Creams online</div> : ""}

        <div className="product-cards"><ProductCard products={products} prices={prices} toppings={toppings} /></div>
      </div>
      <div className="down-btn-menu" onClick={scrollToBottom}><span>Scroll Down</span><br /><FaArrowDown className="scroll-arrow-menu" /></div>
      <ScrollTopMenu />
      <CartCount />
      <button className="call-to-action-pizza " onClick={() => props.history.push('/menu')}>Menu</button>
    </div>
  )
}

export default ProductPage
