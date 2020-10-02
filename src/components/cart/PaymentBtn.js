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
        onSuccess: () => {
             const id= recent.id
             const data= {id}
            payment(data, Ordered).then(res => storedispatch(res))
            return <Redirect to = "/" / >
        },
        onClose: () => { console.log("cool") }
    };

    return ( <div>
        <p > You can make payment now, or pay later </p> <RaveProvider {...pay } >
        <RavePaymentButton > Pay₦ { numbro(parseInt(recent.total + recent.logistics)).format({ thousandSeparated: true }) } 
        </RavePaymentButton> </RaveProvider> <Button onClick = {() => props.history.push("/") } > Pay Later </Button> </div>
    )
}

export default PaymentBtn