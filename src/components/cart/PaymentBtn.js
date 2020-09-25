import React from 'react';
import { RaveProvider, RavePaymentButton } from "react-ravepayment";
import { Button } from 'reactstrap';

const PaymentBtn = () => {
    const config = {
        txref: (new Date()).toString(),
        customer_email: "user@example.com",
        customer_phone:  "234099940409",
        amount: 2000,
        PBFPubKey: "FLWPUBK_TEST-79b39b660c2b5bcc87b62b747d4c3fa2-X",
        production: false
    };

    const pay = {
        ...config,
        onSuccess: () => {},
        onClose: () => { console.log("cool")}
    };

    return (
        <div>
        
        <RaveProvider {...pay}>
          <Button>Pay 2000</Button>
        </RaveProvider>
      </div>
    )
}

export default PaymentBtn
