import React, { useState, useEffect } from 'react';

import axios from 'axios';
import numbro from 'numbro';
import './SingleProduct.css';

import {
    Container,Row, Col, Button
} from 'reactstrap';
import logoSingle from '../../assets/LAMELŌ logo blu3.png';
import RelatedProduct from '../RelatedProduct/RelatedProduct'

const SingleProduct = (props) => {
    const [singleProduct, setSingleProduct] = useState(0);
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [Price, setPrice] = useState([]);  
    useEffect(() => {
        let productId = props.match.params.id;
        let variables = {
          id: productId
       }

        axios.post("http://lameloapi.herokuapp.com/getproduct", variables, {headers: {"Content-Type": "application/json"}})
          .then(res => {
            if(res.data) {
              setSingleProduct(res.data.product);
              setRelatedProduct(res.data.related)
              setPrice(res.data.prices);
            }else {
               alert(`Failed to fetch products`)
            }
             
          }).catch(err => {
             console.log(err)
          });


    }, [props.match.params.id]);

    return (
        <div className="single-menu">
            <Container >
                <Row><img src={logoSingle} className="singleproduct-logo" alt="logo-blue"/></Row>
                <Row>
                    <Col lg="6">
                        <img src={singleProduct.image} className="product-img" alt={`img-${singleProduct.name}`}/>
                     
                    </Col>
                    <Col lg="6">
                      <h3 className="product-name">{singleProduct.name}</h3>
                       <p className="product-description"><b>Description:</b> {singleProduct.description}</p>
                       {singleProduct.flavour === "null" ? "" : <p className="product-description"><b>Flavours:</b> {singleProduct.flavour}</p>}
                      
                       {singleProduct.price === 0 && <p className="size-description">Please Select the Size You Need</p>}
                       {singleProduct.price === 0  ? Price.map((sizeprice, index) =>(
                              <div className="pretty p-rotate p-default" key={index}>
                              <input type="checkbox" className="checks"/>
                              <div className="state p-warning">
                                  <label><span className="size">Size:</span> <span className="sizes">{sizeprice.size} - </span> <span className="price">₦{numbro(parseInt(sizeprice.price)).format({thousandSeparated: true})}</span></label>
                              </div>
                          </div>
                      
                          
                       )):  <p><b className="single-price">Price:</b> <span className="price">₦{numbro(parseInt(singleProduct.price)).format({thousandSeparated: true})}</span></p>}
                       <Button className="add-to-cart">Add to Cart</Button>
                    </Col>
                </Row>
                <h1 className="related-header">Related Products</h1>
                     <RelatedProduct related={relatedProduct} />
            </Container>
            <button className="call-to-action-pizza " onClick={() => props.history.push('/menu')}>Menu</button>
        </div>
    )
}

export default SingleProduct
