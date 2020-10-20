import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import numbro from 'numbro';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Card, Button } from 'reactstrap';

import './Dashboard.css'
import { ThemeContext } from '../Context/ThemeContext';

import { storeContext, performAction, GET_ORDERED } from '../../components/State/State';

const OrderList = (props) => {
    const products = props.products
    const theme = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const checkTheme = isLightTheme ? light: dark

    const { storestate, storedispatch } = useContext(storeContext);
    const { customers } = storestate
    const filterCustomers = (array, customerId) => {
        let [match] = array.filter(customer => customer.id == customerId)
        return match.fullName
    }

    const onclick = (e) => {
        const [id, action] = e.target.id.split("-")
        console.log(id)
        const data = { "action": action, "data": id, "customer": "", "search": "" }

        const decisionBox = () => toast.success(<div className="decisionBox">
            <p>{action == "Delivered" ? `Are you sure you want to mark order with id: ${id} as delivered` :
                `Are you sure you want to send order with id: ${id} to Archives`}</p><br />
            <div className="btns-checkout">
                <Button onClick={() => { performAction(data, GET_ORDERED).then(res => storedispatch(res)) }} color="success">Yes</Button>
                <Button color="info">No</Button>
            </div>
        </div>, {
            position: "top-center",
            autoClose: 50000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        decisionBox()
    }
    const list = products.map(items => (
        <tr key={items.id} role="role">
            <td><NavLink style={{color: checkTheme.syntax }} to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}> {items.OrderId}</NavLink> </td>
            <td><NavLink style={{color: checkTheme.syntax  }} to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}> {filterCustomers(customers, items.customer)}</NavLink> </td>
            <td><NavLink style={{color: checkTheme.syntax  }} to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}> &#x20A6; {numbro(items.total).format({ thousandSeparated: true })}</NavLink></td>
            <td>{items.destination === 'null' ? '':  <NavLink style={{color: checkTheme.syntax  }} to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}>{items.destination}</NavLink>}</td>
            <td>{ items.logistics === 0 ? "" : <NavLink style={{color: checkTheme.syntax  }} to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}>&#x20A6;{numbro(items.logistics).format({ thousandSeparated: true })}</NavLink>}</td>
            <td><NavLink style={{color: checkTheme.syntax  }} to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}>&#x20A6;{numbro(items.logistics + items.total).format({ thousandSeparated: true })}</NavLink></td>
            <td> <NavLink style={{color: checkTheme.syntax  }} to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}>{items.created}</NavLink></td>
            <td> <NavLink style={{color: checkTheme.syntax  }} to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}>{items.delivered ? "Delivered" : "Not Delivered"}</NavLink></td>
            <td>{items.delivered ? "" : <Button id={`${items.OrderId}-Delivered`} style={{marginRight: "5px"}} onClick={onclick}>Delivered?</Button>}
            {items.archived ? "" : <Button id={`${items.OrderId}-Archive`} onClick={onclick}>Archive</Button>}</td>
        </tr>
    ))

    return (
            <Container className="dashboard-container">
                     {isLightTheme ?
                      <Card style={{ backgroundColor: checkTheme.cardHeader }}>
                       
                       <h3 style={{textAlign: 'center', fontSize:'30px', backgroundColor: checkTheme.cardHeader }}>
                          Recent Orders
                       </h3>
                       <table class="table table-striped" role="table">
                       <thead role="rowgroup">
                        <tr role="row">
                            <th role="columnheader">Ref No:</th>
                            <th role="columnheader">Customer</th>
                            <th role="columnheader">Amount</th>
                            <th role="columnheader">Destination</th>
                            <th role="columnheader">Logistics </th>
                            <th role="columnheader">Total</th>
                            <th role="columnheader">Date ordered</th>
                            <th role="columnheader">Status</th>
                            <th role="columnheader"></th>
                        </tr>
                    </thead>
                        <tbody role="rowgroup">
                        {list}
                        </tbody>
                      </table>
                    </Card>: 
                    <Card style={{ backgroundColor: checkTheme.cardHeader }}>
                      
                     <h3 style={{textAlign: 'center', fontSize:'30px', backgroundColor: checkTheme.cardHeader, padding: '10px'}}>
                        Recent Orders
                     </h3>
                      <table class="table table-striped table-dark" role="table">
                      <thead role="rowgroup">
                        <tr role="row">
                            <th role="columnheader">Ref No:</th>
                            <th role="columnheader">Customer</th>
                            <th role="columnheader">Amount</th>
                            <th role="columnheader">Destination</th>
                            <th role="columnheader">Logistics </th>
                            <th role="columnheader">Total</th>
                            <th role="columnheader">Date ordered</th>
                            <th role="columnheader">Status</th>
                        </tr>
                    </thead>
                        <tbody role="rowgroup">
                          {list}
                        </tbody>
                    </table></Card>}
                    <ToastContainer position="top-center"
                        autoClose={10000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </Container> 
        
    );
};


export default OrderList;