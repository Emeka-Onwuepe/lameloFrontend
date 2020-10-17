import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import numbro from 'numbro';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Card,Button } from 'reactstrap';
import { ThemeContext } from './Context/ThemeContext';

import { storeContext, performAction, GET_ORDERED } from './../components/State/State';

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
        <tr key={items.id}>
            <td><NavLink to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}> {items.OrderId}</NavLink> </td>
            <td><NavLink to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}> {filterCustomers(customers, items.customer)}</NavLink> </td>
            <td><NavLink to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}> &#x20A6; {numbro(items.total).format({ thousandSeparated: true })}</NavLink></td>
            <td> <NavLink to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}>{items.destination}</NavLink></td>
            <td><NavLink to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}>&#x20A6; {numbro(items.logistics).format({ thousandSeparated: true })}</NavLink></td>
            <td><NavLink to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}>&#x20A6; {numbro(items.logistics + items.total).format({ thousandSeparated: true })}</NavLink></td>
            <td> <NavLink to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}>{items.created}</NavLink></td>
            <td> <NavLink to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}>{items.delivered ? "Delivered" : "Not Delivered"}</NavLink></td>
            {items.delivered ? "" : <button id={`${items.OrderId}-Delivered`} onClick={onclick} type="">Delivered ?</button>}
            {items.archived ? "" : <button id={`${items.OrderId}-Archive`} onClick={onclick} type="">Archive</button>}
        </tr>
    ))

    return (
        <div>
            {/* <div className="orderedList page">
                <table>
                    <thead>
                        <tr>
                            <th>Ref No:</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Destination</th>
                            <th>Logistics </th>
                            <th>Total</th>
                            <th>Date ordered</th>
                            <th>Delivered</th>
                        </tr>
                    </thead>
                    <tbody>{list}</tbody>
                </table>
            </div> */}
            <Container>
                     {isLightTheme ?
                      <Card>
                       
                       <h3 style={{textAlign: 'center', fontSize:'30px', backgroundColor: checkTheme.cardHeader, }}>
                          Recent Orders
                       </h3>
                       <table class="table table-striped" style={{overflowX: 'auto'}}>
                       <thead>
                        <tr>
                            <th>Ref No:</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Destination</th>
                            <th>Logistics </th>
                            <th>Total</th>
                            <th>Date ordered</th>
                            <th>Delivered</th>
                        </tr>
                    </thead>
                        <tbody>
                        {list}
                        </tbody>
                      </table>
                    </Card>: 
                    <Card>
                      
                     <h3 style={{textAlign: 'center', fontSize:'30px', backgroundColor: checkTheme.cardHeader, padding: '10px'}}>
                        Recent Orders
                     </h3>
                      <table class="table table-striped table-dark" style={{overflowX: 'auto'}}>
                      <thead>
                        <tr>
                            <th>Ref No:</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Destination</th>
                            <th>Logistics </th>
                            <th>Total</th>
                            <th>Date ordered</th>
                            <th>Delivered</th>
                        </tr>
                    </thead>
                        <tbody>
                          {list}
                        </tbody>
                    </table></Card>}
                </Container> 
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
        </div>
    );
};


export default OrderList;