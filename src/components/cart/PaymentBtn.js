import React, { useContext } from 'react';
import { RaveProvider, RavePaymentButton } from 'react-ravepayment';
import numbro from 'numbro';
import { Redirect } from 'react-router-dom';

import { storeContext, payment } from '../State/State';
import { Button } from 'reactstrap';

const PaymentBtn = (props) => {
    const { storestate, storedispatch } = useContext(storeContext)
    const { User, Ordered } = storestate;
    const last = Ordered.length - 1
    const recent = Ordered[last]

    const config = {
        txref: recent.OrderId,
        customer_email: User.email,
        customer_phone: User.phoneNumber,
        amount: recent.total + recent.logistics,
        PBFPubKey: "FLWPUBK_TEST-79b39b660c2b5bcc87b62b747d4c3fa2-X",
        production: false
    };

    const pay = {
        ...config,
        onSuccess: (res) => {
             const id= recent.id

             const data= {id}
            payment(data, Ordered).then(res => storedispatch(res))
            
        },
        onClose: () => { console.log("cool") }
    };

    return ( <div className="payment-portal">
        <p > You can make payment now, or pay later </p><br /> <div className="payment-btns"><RaveProvider {...pay } >
        
        <RavePaymentButton > Pay ₦{ numbro(parseInt(recent.total + recent.logistics)).format({ thousandSeparated: true }) } 
        </RavePaymentButton> </RaveProvider> <Button onClick = {() => props.history.push("/") } className="btn-paylater"> Pay Later </Button> 
        </div>
        </div>
    )
}

export default PaymentBtn