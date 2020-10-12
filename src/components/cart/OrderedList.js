import React,{useContext} from 'react';
import { RaveProvider, RavePaymentButton } from 'react-ravepayment';

import { NavLink } from 'react-router-dom';
import numbro from 'numbro';

import './ordered.css';
import { storeContext,payment} from '../State/State';
import ScrollTop from '../Home/ScrollTop';

const OrderedList = (props) => {
 const { storestate, storedispatch } = useContext(storeContext);
 const {Ordered,User}=storestate

const config =(items,user,ordered)=>{
const data={id:items.id}
return {
        txref: items.OrderId,
        customer_email: user.email,
        customer_phone: user.phoneNumber,
        amount: items.total + items.logistics,
        PBFPubKey: "FLWPUBK_TEST-79b39b660c2b5bcc87b62b747d4c3fa2-X",
        production: false,
        onSuccess:(()=>{
             payment(data, ordered).then(res => storedispatch(res))
        })
        
    }

} ;

    const products = props.products
    const list = products.map(items => (
    <tr key={items.id}>
        <td><NavLink to={`/ordered/${items.id}/${items.total}`}> {items.OrderId}</NavLink> </td>
        <td><NavLink to={`/ordered/${items.id}/${items.total}`}> &#x20A6; {numbro(items.total).format({thousandSeparated: true})}</NavLink></td>
        <td><NavLink to={`/ordered/${items.id}/${items.total}`}>&#x20A6; {numbro(items.logistics).format({thousandSeparated: true})}</NavLink></td>
        <td> <NavLink to={`/ordered/${items.id}/${items.total}`}>{items.created}</NavLink></td>
  
    {items.paid ?<td>PAID</td>:
         <td><RaveProvider {...config(items,User,Ordered)}>
            <RavePaymentButton >
                Pay Now (&#x20A6;{numbro(items.total + items.logistics).format({thousandSeparated: true})})
            </RavePaymentButton>
        </RaveProvider>
        </td>
    }
    </tr>))

    return (
        <div>
            <h3  className="orderlist-header">List of Orders</h3>
            <div className="orderedList page">
                <table>
                        <thead>
                            <tr>
                                <th>Ref No:</th>
                                <th>Amount</th>
                                <th>Logistics </th>
                                <th>Date ordered</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        <tbody>{list}</tbody>
                    </table>
            </div>
            <ScrollTop />
        </div>
    );
};


export default OrderedList;
