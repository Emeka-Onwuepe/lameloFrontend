import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, Container, Alert
} from 'reactstrap';

const RelatedProduct = ({related}) => {
  return (
    <Container>
        <Row>
     {
         (related && related.length > 0) ? related.map((product, index) => (
         <Col lg="4" key={index}>
             <Card className="card-container">
                <CardImg top width="95%" src={product.image} alt={`related-image-${product.image}`} height={250}/>
                <CardBody>
                <CardTitle><h3>{product.name}</h3></CardTitle>
                <CardSubtitle><h6><strong>description:</strong></h6></CardSubtitle>
                <CardText style={{color: 'black'}}>{product.description.length > 150 ? `${product.description.slice(0, 145)}...`: product.description}</CardText>
                <Link to={`/product/${product.id}`} className="btn-colors">Order Now</Link>
                </CardBody>
            </Card>
         </Col>
        )): <Alert>Failed to load items</Alert>
     }
      
      </Row>
    </Container>
  )
}

export default RelatedProduct
