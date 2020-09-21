import React from 'react';
import Logo1 from '../../assets/LAMELŌ logo blk.png';

import bgImg from '../../assets/restaurant.jpeg';
import { Row, Col, Card, CardText, CardBody,
  CardTitle, Container} from 'reactstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';

import './Home.css';

const Home = (props) => {
    return (
                 <div className="content">
                      <Row className="row-items">
                        
                        <Col lg="3" className="scrolldown"><div className="down-btn"><span>Scroll Down</span><br/><FaArrowDown className="scroll-arrow"/></div></Col>
                        <Col lg="9" >
                          <div className="logo-image">
                             <img src={Logo1} alt="logo1" className="logo-home"/>
                          </div>
                        <img src={bgImg} style={{width: '100%'}} alt="pictures" className="bgImg"/> 
                        <div className="moto">
                           <div className="h1-heading">
                              <h1>Once Bitten, Twice Melo</h1>
                           </div>
                            <div className="welcome-container">
                            <span className="welcome-note">
                              <span className="welcome">Welcome to Lamelo Restaurant,the best plug for your, Pizza, Ice cream,Salad, shawama, Chicken wings and Burger</span><br />
                              <span className="main">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non minima sed voluptas architecto suscipit possimus?
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non minima sed voluptas architecto suscipit possimus?
                              </span>
                            </span>
                            </div>
                          <Row className="contact">
                            <Col lg="4" id="explore-contact">
                              <div > 
                                <Card className="explore"> 
                                   
                                  <CardBody>
                             
                                    <CardTitle><h2 className="explore-header">Explore</h2></CardTitle>
                                  
                                   
                                    <CardText className="text-details">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                  </CardBody>
                                </Card>
                              </div>
                            </Col>

                            <Col lg="8" className="contactor">
                             
                            <Card className="contact-us"> 
                           
                          
                            
                             <Col lg="7" className="colored">
                                 <CardTitle><h2 className="explore-headers">Contact</h2></CardTitle>
                                 <CardBody className="card-body">
                                 <CardText className="text-details-1">
                                    <span className="holder">OPENING TIME</span><br />
                                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing.</span><br />
                                    <span  className="holder">VISIT US</span><br />
                                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing.</span><br />
                                    <span  className="holder">CALL US</span><br />
                                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing.</span><br />
                                    <div className="social-links"><a target="_blank" href="https://www.facebook.com/LAMELOnigeria/" className="facebook"  rel="noopener noreferrer"><FaFacebook /></a> <a target="_blank" href="https://www.twitter.com/lamelo_ng" classname="twitter"  rel="noopener noreferrer"><FaTwitter /></a> <a target="_blank" href="https://www.instagram.com/lamelo_ng" className="instagram"  rel="noopener noreferrer"><FaInstagram /></a><a target="_blank" href="https://www.linkedin.com/in/lamelo-ng-4956161b4/" className="linkedin"  rel="noopener noreferrer"><FaLinkedin /></a></div>
                                 </CardText>
                                 </CardBody>
                             </Col>
                           
                             <Col lg="4" className="map-box">
                             <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15758.247589548013!2d7.4048307760740055!3d9.103612932998885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLamelo%20Restaurant%2CFirst%20Avenue%20Gwarimpa%2C%20Beside%20DBB%20Plaza%20Abuja!5e0!3m2!1sen!2sng!4v1600689399752!5m2!1sen!2sng" allowfullscreen={true} aria-hidden="false" tabindex="0"  title="lamelo-address" frameBorder="0"  rel="noopener noreferrer"></iframe>
                             </Col>
                        
                              </Card>
                              
                            </Col>
                            
                          </Row>
                          </div>
                         </Col>
                      </Row>
                      <Container fluid id="other-items">
                      <div className="others">   
                      <Row className="other-details">
                              <Col lg="4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam explicabo, voluptatem error distinctio fugiat consequatur?</Col>
                              <Col lg="4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam explicabo, voluptatem error distinctio fugiat consequatur?</Col>
                              <Col lg="4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam explicabo, voluptatem error distinctio fugiat consequatur?</Col>
                          {/* </Container> */}
                        
                      </Row>
                      </div>
                      </Container>
                      <button className="call-to-action" onClick={() => props.history.push('/menu')}>Menu</button>
                  </div>
                


         
          
          
 
   
    )
}

export default Home
