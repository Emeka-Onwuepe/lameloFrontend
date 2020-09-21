import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Row } from 'reactstrap';

import Logo1 from '../../assets/LAMELŌ logo blk.png';



import './BWF.css';
import BWFCard from './BWFCard';

const BWF = (props) => {
   const [getBFW, setGetBFW] = useState("");

   
   const fetchProducts = () => {
    let variables = {
      "action": "bfw"
   }
    axios.post("http://lameloapi.herokuapp.com/getproducts", variables, {headers: {"Content-Type": "application/json"}})
      .then(res => {
        if(res.data) {
            setGetBFW(res.data)
        }else {
           alert(`Failed to fetch products`)
        }
         
      }).catch(err => {
         console.log(err)
      })
  
    }

   useEffect(() => {
       fetchProducts()
   }, []);

    return (

      <div className="border">
              <div className="bwf-bg">
                 <Container fluid>
                   <Row>
                        <img src={Logo1} alt="logo1" className="logo-bwf"/>
                    </Row>
                      <h1 className="text-center text-color">Burger, Chicken Wing, Fries Menu</h1>
                      <div className="divider-center-bwf" ></div>
                      <div className="bwf-definations">
                        <p></p>
                      </div>
                      <div className="product-cards"><BWFCard bwf={getBFW} /></div>
                  </Container>
             
              </div>
              <button className="call-to-action-pizza " onClick={() => props.history.push('/menu')}>Menu</button>
        </div>
    )
}

export default BWF;
