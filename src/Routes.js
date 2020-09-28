import React, { useState, useEffect } from 'react';
import { Route, Switch  } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import ShoppingCart from "./components/cart/ShoppingCart"
import ProductPage from './components/Card/ProductPage';
import Details from "./components/cart/Details";
import OrderedItems from "./components/cart/OrderedItems";
import OrderedHistory from "./components/Card/OrderedHistory"
import PaymentBtn from './components/cart/PaymentBtn';

// import './CSSTransition/SlideTransition.scss';



const Routes = (props) => {
    // const [prevDepth, setPrevDepth] = useState(getPathDepth(props.location))
    
    // function getPathDepth(location) {
    //     let pathArr = location.pathname.split("/");
    //     pathArr = pathArr.filter(n => n !== "");
    //     return pathArr.length;
    // }


  
 
   
    // const timeout = { enter: 800, exit: 400 };
    // const { location } = props;

    // const currentKey = props.location.pathname.split("/")[1] || "/";

    // useEffect(() => {
    //     setPrevDepth(getPathDepth(props.location))
    // }, [props.location])
    return (
        //  <TransitionGroup component="div">
        //      <CSSTransition key={currentKey} timeout={timeout} className="pageSlider" mountOnEnter={false} unmountOnExit={true}>
        //         <div className={getPathDepth(props.location) - prevDepth >= 0 ? "left": "right" }>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/menu" component={Menu} />
                        <Route exact path="/ShoppingCart" component={ShoppingCart} />
                        <Route exact path="/confirmOrder" component={Details} />
                        <Route exact path="/pay" component={PaymentBtn} />
                        <Route exact path="/orderhistory" component={OrderedHistory} />
                        <Route exact path="/ordered/:id/:total" component={OrderedItems} />
                        <Route exact path="/:category" component={ProductPage} />
                    </Switch>
        //       </div>
        //     </CSSTransition>
        // </TransitionGroup>
    )
}

export default Routes;