import React, { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import numbro from 'numbro';
import './Archives.css';

import Pagination from '../Pagination/Pagination';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Container, Card} from 'reactstrap';

import { storeContext, performAction, GET_ARCHIVE, GET_ORDERED } from '../../components/State/State';

import { ThemeContext } from '../Context/ThemeContext'
const ArchivedData = (props) => {
    const [ pageOfItems, setPageOfItems ] = useState([]); 
    const { storestate, storedispatch } = useContext(storeContext);
    const themeContext = useContext(ThemeContext);
    const { isLightTheme, light, dark } = themeContext;
    const checkTheme = isLightTheme ? light: dark
    useEffect(() => {
        const data = { "action": "Get_Archive", "data": "", "customer": "", "search": "" }
        performAction(data, GET_ARCHIVE).then(res => storedispatch(res))
    }, []);
    const { archive, customers } = storestate

    const filterCustomers = (array, customerId) => {
        let [match] = array.filter(customer => customer.id == customerId)
        return match.fullName
    }

    const onclick = (e) => {
        const [id, action] = e.target.id.split("-")
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
    const list = pageOfItems && pageOfItems.length > 0 ? pageOfItems.map(items => (
        <tr key={items.id} role="role" className="archive-order">
            <td className="archive-td"><NavLink style={{color: checkTheme.syntax }} to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}> {items.OrderId}</NavLink> </td>
            <td className="archive-td"><NavLink style={{color: checkTheme.syntax }} to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}> {filterCustomers(customers, items.customer)}</NavLink> </td>
            <td className="archive-td"><NavLink style={{color: checkTheme.syntax }} to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}> &#x20A6; {numbro(items.total).format({ thousandSeparated: true })}</NavLink></td>
          <td className="archive-td">{items.destination === 'null' ? "" : <NavLink style={{color: checkTheme.syntax }} to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}>{items.destination}</NavLink>}</td>
          <td className="archive-td">{items.logistics === 0 ? "" : <NavLink style={{color: checkTheme.syntax }} to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}>&#x20A6; {numbro(items.logistics).format({ thousandSeparated: true })}</NavLink>}</td>
            <td className="archive-td"><NavLink style={{color: checkTheme.syntax }} to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}>&#x20A6; {numbro(items.logistics + items.total).format({ thousandSeparated: true })}</NavLink></td>
            <td className="archive-td"> <NavLink style={{color: checkTheme.syntax }} to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}>{items.created}</NavLink></td>
            <td className="archive-td"> <NavLink style={{color: checkTheme.syntax }} to={`/ordered/${items.id}/${items.total}/${items.customer}/${items.destination}`}>{items.delivered ? "Delivered" : "Not Delivered"}</NavLink></td>
            <td className="archive-td">{items.delivered ? "" : <Button id={`${items.OrderId}-Delivered`} onClick={onclick} type="">Delivered ?</Button>}
            {items.archived ? "" : <button id={`${items.OrderId}-Archive`} onClick={onclick} type="">Archive</button>}
            </td>
        </tr>
    )) : <p className="text-center" style={{ color: "#333", textAlign: 'center'}}>No records found</p>

    const onChangePage = (pageOfItems) => {
		setPageOfItems(pageOfItems);
	}  

    return (
        <Container className="archive-container">
               {isLightTheme ?
                      <Card style={{ backgroundColor: checkTheme.cardHeader }}>
                       
                       <h3 style={{textAlign: 'center', fontSize:'30px', backgroundColor: checkTheme.cardHeader }}>
                         Archived Orders
                       </h3>
                       <table className="table table-striped archive-table" role="table">
                       <thead role="rowgroup" className="archive-theading">
                        <tr role="row" className="archive-hrow">
                            <th role="columnheader" className="archive-th">Ref No:</th>
                            <th role="columnheader" className="archive-th">Customer</th>
                            <th role="columnheader" className="archive-th">Amount</th>
                            <th role="columnheader" className="archive-th">Destination</th>
                            <th role="columnheader" className="archive-th">Logistics </th>
                            <th role="columnheader" className="archive-th">Total</th>
                            <th role="columnheader" className="archive-th">Date ordered</th>
                            <th role="columnheader" className="archive-th">Status</th>
                            <th role="columnheader" className="archive-th"></th>
                        </tr>
                    </thead>
                        <tbody role="rowgroup" className="archive-tbody">
                           {list}
                         
                        </tbody>
                      </table>
                       {archive && archive.length > 0 ? (
                        <Pagination  items={archive} onChangePage={onChangePage}/>): null
                       }
                    </Card>: 
                    <Card style={{ backgroundColor: checkTheme.cardHeader }}>
                      
                     <h3 style={{textAlign: 'center', fontSize:'30px', backgroundColor: checkTheme.cardHeader, padding: '10px'}}>
                        Archived Orders
                     </h3>
                      <table className="table table-striped table-dark archive-table" role="table">
                      <thead role="rowgroup" className="archive-theading">
                        <tr role="row" className="archive-hrow">
                            <th role="columnheader" className="archive-th">Ref No:</th>
                            <th role="columnheader" className="archive-th">Customer</th>
                            <th role="columnheader" className="archive-th">Amount</th>
                            <th role="columnheader" className="archive-th">Destination</th>
                            <th role="columnheader" className="archive-th">Logistics </th>
                            <th role="columnheader" className="archive-th">Total</th>
                            <th role="columnheader" className="archive-th">Date ordered</th>
                            <th role="columnheader" className="archive-th">Status</th>
                            <th role="columnheader" className="archive-th"></th>
                        </tr>
                    </thead>
                        <tbody role="rowgroup" className="archive-tbody">
                          {list}
                        
                        </tbody>
                       {/* <tfoot>
                            <tr>
                           
                          </tr>
                       </tfoot> */}
                    
                    </table>
                    {archive && archive.length > 0 ? (
                      <Pagination  items={archive} onChangePage={onChangePage}/>): null
                    }
                    </Card>
                   }
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
}


export default ArchivedData;