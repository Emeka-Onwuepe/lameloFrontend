import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, Container, Alert
} from 'reactstrap';

const BWFCard = ({bwf}) => {
  return (
    <Container>
        <Row>
            {console.log(bwf)}
     {
         bwf && bwf.length > 0 ? bwf.map((bwf, index) => (
         <Col lg="4" key={index}>
             <Card className="card-container">
                <CardImg top width="95%" src={bwf.image} alt={`product-${bwf.image}`} height={250}/>
                <CardBody>
                <CardTitle><h3>{bwf.name}</h3></CardTitle>
                <CardSubtitle><h6><strong>description:</strong></h6></CardSubtitle>
                <CardText style={{color: 'black'}}>{bwf.description.length > 90 ? `${bwf.description.slice(0, 70)}...`: bwf.description}</CardText>
                <Link to={`/product/${bwf.id}`} className="btn-colors-bfw">Order Now</Link>
                </CardBody>
            </Card>
         </Col>
        )): <Alert>Failed to load items</Alert>
     }
      
      </Row>
    </Container>
  );
};

export default BWFCard;