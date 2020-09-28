import React,{useContext} from 'react';

import { NavLink } from 'react-router-dom';
import numbro from 'numbro';

import './ordered.css';
import { storeContext,payment,PAYMENT } from '../State/State';

const OrderedList = (props) => {
 const { storestate, storedispatch } = useContext(storeContext);
 const {Ordered}=storestate

const Onclick=(e)=>{
    const id= e.target.id
    const data= {id}
    payment(data).then((res)=>{
        const filtered= Ordered.filter(item=>item.id !=res.id).push(res)
        storedispatch({type:PAYMENT,data:filtered})
    })
}

    const products = props.products
    const list = products.map(items => (<li key={items.id}><NavLink to={`/ordered/${items.id}/${items.total}`}>
        <span> Id: {items.OrderId} </span>
        <span>Amount: &#x20A6; {numbro(items.total).format({thousandSeparated: true})}</span>
        <span> {items.created}</span>
    </NavLink> 
    {items.paid ?<span>PAID</span>:<button  id={items.id} type="" onClick={Onclick}>Pay now</button>}
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
