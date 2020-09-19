import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, Container, Alert
} from 'reactstrap';

const PizzaCard = ({pizzas}) => {
  return (
    <Container>
        <Row>
     {
         (pizzas && pizzas.length > 0) ? pizzas.map((pizza, index) => (
         <Col lg="4" key={index}>
             <Card className="card-container">
                <CardImg top width="95%" src={pizza.image} alt={`pizza-image-${pizza.image}`} height={250}/>
                <CardBody>
                <CardTitle><h3>{pizza.name}</h3></CardTitle>
                <CardSubtitle><h6><strong>description:</strong></h6></CardSubtitle>
                <CardText style={{color: 'black'}}>{pizza.description.length > 150 ? `${pizza.description.slice(0, 151)}...`: pizza.description}</CardText>
                <Link to={`/product/${pizza.id}`} className="btn-colors">Order Now</Link>
                </CardBody>
            </Card>
         </Col>
        )): <Alert>Failed to load items</Alert>
     }
      
      </Row>
    </Container>
  );
};

export default PizzaCard;