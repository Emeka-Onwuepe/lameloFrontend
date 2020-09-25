import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import ShoppingCart from "./components/cart/ShoppingCart"
import ProductPage from './components/Card/ProductPage';
import Details from "./components/cart/Details"
import OrderedItems from "./components/cart/OrderedItems"



const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/ShoppingCart" component={ShoppingCart} />
                <Route exact path="/confirmOrder" component={Details} />
                <Route exact path="/ordered/:id/:total" component={OrderedItems} />
                <Route exact path="/:category" component={ProductPage} />
            </Switch>
        </Router>
    )
}

export default Routes