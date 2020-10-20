import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Admin from './pages/Dashboard/Admin';
import Notifications from './pages/Notifications/Notifications';
import Orders from './pages/Orders/Orders';
import Sales from './pages/Sales/Sales';
import Invoice from './pages/Invoice/Invoice';
import Archives from './pages/Archives/Archives';
import OrderedProducts from './pages/Dashboard/OrderedProducts';


const ThemeRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/admin/admin-dashboard" component={Admin} />
                <Route exact path="/admin/notifications" component={Notifications} />
                <Route exact path="/admin/orders" component={Orders} />
                <Route exact path="/ordered/:id/:total/:customerId/:destination" component={OrderedProducts} />
                <Route exact path="/admin/sales" component={Sales} />
                <Route exact path="/admin/invoice" component={Invoice} />
                <Route exact path="/admin/archives" component={Archives} />
            </Switch>
        </div>
    );
};


export default ThemeRoutes;
