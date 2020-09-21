import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BWF from './components/BWF/BWF';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Pizza from './components/Pizza/Pizza';
import SingleProduct from './components/Products/SingleProduct';
import ShoppingCart from "./components/cart/ShoppingCart"



const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/pizza-page" component={Pizza} />
                <Route exact path="/product/:id" component={SingleProduct} />
                <Route exact path="/wings-fries-burger" component={BWF} />
                <Route exact path="/ShoppingCart" component={ShoppingCart} />
                {/* <Route exact path="/salad-page" component={Salad}/>
              <Route exact path="/gelatos" component={Gelato} />  */}
            </Switch>
        </Router>
    )
}

export default Routes
