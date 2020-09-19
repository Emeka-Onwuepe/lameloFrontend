import React from 'react';
import Logo1 from '../../assets/LAMELŌ logo blk.png';
// import bgImg from '../';
import { Container, Row, Col } from 'reactstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

import './Home.css';
// import { Link } from 'react-router-dom';
import HomeSlider from './HomeSlider';


const Home = (props) => {
    return (
        <div className="border">
              <div className="pImg1">
                 <Container fluid>
                      <Row>
                          <img src={Logo1} alt="logo1" className="logo"/>
                      </Row>
                      <div id="detail-row">
                    
                    
                        <section className="section slider">
                              <HomeSlider />
                        </section>
                      </div>
                     
                  </Container>
                
              </div>
              <div className="pImg2">
                 <Container fluid id="second_section">
                  <Row>
                   <Col lg="6">
                    <section className="section1">
                          <p className="welcome_note">
                            Welcome Lamelo Restaurant, Trust Lamelo Restaurant for your <i>family dinner</i>, <i>friends hangout</i>, <i>birthdays</i> and a lot more <br/>
                            Our customer service is topnotch, we are 24hrs available to receive your calls and delivery order.
                            Order now by clicking on the <em>Menu Button</em>  at the bottom right of this page.
                          </p>
                      </section>
                     </Col>
                     <Col lg="6" >
                        <section className="section2">
                              <p>
                                Welcome Lamelo Restaurant, Trust Lamelo Restaurant for your <i>family dinner</i>, <i>friends hangout</i>, <i>birthdays</i> and a lot more <br/>
                                Our customer service is topnotch, we are 24hrs available to receive your calls and delivery order.
                                Order now by clicking on the <em>Menu Button</em>  at the bottom right of this page.
                              </p>
                            
                        </section>
                        </Col>
                  </Row>
                </Container>
              </div>
              <div className="pImg3 contact">
                <Container>
                    <Row className="contact-us">
                     
                        <Col lg="4" className="section3 explore">
                          <section className="explore-more">
                              <span>Click Here to Explore More</span>
                           </section>
                        </Col>

                        <Col lg="8" className="section3 contact-page">
                       
                          <section className="section3">
                               <Row className="contact-details">
                            <Col lg="8" className="contact-info">
                              <h3 className="font-weight-bolder">Contact Info:</h3>
                              <div><span className="text-header">Address: &nbsp;</span>
                              <span className="address-text">
                                Obioma Onyeador Plaza, First Avenue Gwarimpa, Beside DBB Plaza Abuja Municipal Area Council (AMAC) 900108 Abuja</span></div><br />
                                <div><span className="text-header">Email: &nbsp;</span>
                              <a href="mailto:info@lamelo.com.ng" className="email-text text-dark">info@lamelo.com.ng</a></div><br />
                              <div><span className="text-header">Tel: &nbsp;</span>
                              <a href="tel:+2348138602173" className="tel-text text-dark">(+234) 813 860 2173</a></div>
                              <div>
                                <div className="text-header-social text-center font-weight-bolder">Social Links</div>
                                <hr className="social-divider"/>
                                <center className="center-icons">
                                  <a href="https://www.facebook.com/LAMELOnigeria" target="_blank" className="social-links" rel="noopener noreferrer"><FaFacebook /></a>
                                  <a href="https://www.twitter.com/lamelo_ng" target="_blank" className="social-links" rel="noopener noreferrer"><FaTwitter/></a>
                                  <a href="https://www.twitter.com/lamelo_ng" target="_blank" className="social-links" rel="noopener noreferrer"><FaInstagram/></a>
                                  <a href="https://www.linkedin.com/in/lamelo-ng-4956161b4" rel="noopener noreferrer" className="social-links"><FaLinkedin/></a>
                                 </center>
                              </div>
                            </Col>
                            <Col lg="4" className="map"><p>Welcome Lamelo Restaurant, Trust Lamelo Restaurant for your <i>family dinner</i>, <i>friends hangout</i>, <i>birthdays</i> and a lot more</p></Col>
                            </Row>
                            </section>
                        </Col>
                    </Row>
                    
                  </Container>
              </div>
              <button className="call-to-action" onClick={() => props.history.push('/menu')}>Menu</button>
        </div>
   
    )
}

export default Home
