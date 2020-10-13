import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useLocation } from 'react-router-dom';
import Admin from './pages/Admin';
import Notifications from './pages/Notifications';
import Orders from './pages/Orders';
import Sales from './pages/Sales';
import Invoice from './pages/Invoice';
import Archives from './pages/Archives';

const ThemeRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/admin/admin-dashboard" component={Admin} />
                <Route exact path="/admin/notifications" component={Notifications} />
                <Route exact path="/admin/orders" component={Orders} />
                <Route exact path="/admin/sales" component={Sales} />
                <Route exact path="/admin/invoice" component={Invoice} />
                <Route exact path="/admin/archives" component={Archives} />
            </Switch>
        </div>
    );
};


ThemeRoutes.propTypes = {

};


export default ThemeRoutes;
