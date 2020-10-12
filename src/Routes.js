import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import ShoppingCart from "./components/cart/ShoppingCart"
import ProductPage from './components/Card/ProductPage';
import Details from "./components/cart/Details";
import OrderedItems from "./components/cart/OrderedItems";
import OrderedHistory from "./components/Card/OrderedHistory"
import PaymentBtn from './components/cart/PaymentBtn';
import Admin from './pages/Admin';


const Routes = (props) => {

    return (
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/menu" component={Menu} />
                    <Route exact path="/admin-dashboard" component={Admin} />
                    <Route exact path="/ShoppingCart" component={ShoppingCart} />
                    <Route exact path="/confirmOrder" component={Details} />
                    <Route exact path="/pay" component={PaymentBtn} />
                    <Route exact path="/orderhistory" component={OrderedHistory} />
                    <Route exact path="/ordered/:id/:total" component={OrderedItems} />
                    <Route exact path="/:category" component={ProductPage} />
                  
                </Switch>
        
    )
}
export default Routes;