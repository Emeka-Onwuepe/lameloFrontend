import React,{useContext} from 'react';
import { RaveProvider, RavePaymentButton } from 'react-ravepayment';

import { NavLink } from 'react-router-dom';
import numbro from 'numbro';

import './ordered.css';
import { storeContext,payment} from '../State/State';

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
    const list = products.map(items => (<li key={items.id}><NavLink to={`/ordered/${items.id}/${items.total}`}>
        <span> Id: {items.OrderId} </span>
        <span>Amount: &#x20A6; {numbro(items.total).format({thousandSeparated: true})}</span>
        <span>Logistics: &#x20A6; {numbro(items.logistics).format({thousandSeparated: true})}</span>
        <span> {items.created}</span>
    </NavLink> 
    {items.paid ?<span>PAID</span>:
      <RaveProvider {...config(items,User,Ordered)}  >
        <
        RavePaymentButton >Pay now ({numbro(items.total + items.logistics).format({thousandSeparated: true})})< /RavePaymentButton> <
        /RaveProvider>
    }
    </li>))

    return (
        <div className="orderedList page">
            <h3>List of Orders</h3>
            <ol>
                {list}
            </ol>
        </div>

    );
};


export default OrderedList;
