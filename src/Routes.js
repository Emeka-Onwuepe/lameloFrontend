import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Pizza from './Pizza/Pizza';



const Routes = () => {
    return (
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/menu" component={Menu} />
             <Route exact path="/pizza-page" component={Pizza} />
               {/* <Route exact path="burger-fries-wings" component={Wings}/>
              <Route exact path="/salad-page" component={Salad}/>
              <Route exact path="/gelatos" component={Gelato} /> */}
            </Switch>
        </Router>
    )
}

export default Routes
