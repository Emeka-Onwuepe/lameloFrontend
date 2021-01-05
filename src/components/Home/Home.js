import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Logo1 from '../../assets/LAMELŌ logo blk.png';

import {
  Row, Col, Card, CardText, CardBody,
  CardTitle, Container
} from 'reactstrap';

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';

import './Home.css';
import CartCount from '../Card/CartCount';
import ScrollTop from './ScrollTop';
import ScrollBottom1 from './ScrollBottom1';

const Home = (props) => {
   const [windowHeight, setWindowHeight] = useState(document.documentElement.scrollHeight)
  
  useEffect(() => {
    window.addEventListener('scroll', handleResize)
    return () => {
     window.removeEventListener('scroll', handleResize)
    }
  }, [])

  
 
  function handleResize() {
    setWindowHeight(document.documentElement.scrollHeight)
  }

  const copyRight = (year) => (
    year === new Date().getFullYear() ? year : `${year}  -  ${new Date().getFullYear()}`
  )

  return (
    <div className="home_content1">
        <div className="all_content">
        <div id="scrolldown1">
          <ScrollBottom1/>
        </div>
        <div className="main_content">
        
          <div className="logo-image1">
            <img src={Logo1} alt="logo1" className="logo-home1"/>
          </div>
            <div className="motto-theme1"><h1>Once Bitten, Twice Melo</h1></div>
            <div className="welcome-container1">
              <div className="welcome-note1">
                <p className="welcome1">Welcome to Lamelo Restaurant,the best plug for your, Pizza, Ice cream,Salad, shawama, Chicken wings and Burger</p>
                <p className="main1">
                When you think of having a great time with family and friends and you want to make the best of it, think of Lamelo, we are here to serve and deliver to your door step at a very affordable price. All you need to do is to bite once and you will Melo Twice.
                  </p>
              </div>
            </div>
                  <div className="explorers_side">
                  <Card className="explore1" id="explore-contact1">
                    <Link to="/menu">
                      <CardBody>
                      <CardTitle>
                        <h2 className="explore-header1">Explore</h2></CardTitle>
                      <CardText className="">Learn more about what we have in stock for you, explore now, and get the best pizzas, chicken wings, chicken lolipop, salad, burger, gelatos and alot more... <em style={{color: 'maroon', fontWeight: 'bolder'}}>Just a click will do</em></CardText>
                    </CardBody>
                    </Link>
                  </Card>
               <Card className="contact-us1">
                
                    <CardTitle><h2 className="contact-headers">Contact</h2></CardTitle>
                    <CardBody className="cards">
                      <CardText className="text-detailss">
                        <span className="holder">OPENING TIME</span><br />
                        <span>We are open from 10:00 AM to 10:00 PM from Mondays till Sundays</span><br />
                        <span className="holder">VISIT US</span><br />
                        <span>Plot C18 Obioma Onyeador Plaza, Beside DBB Plaza, 1<sup>st</sup> Avenue, Gwarimpa Abuja </span><br />
                        <span className="holder">CALL US</span><br />
                        <span>+234-814-671-2370<br /> +234-818-799-4444</span><br />
                        <span className="holder">EMAIL US</span><br />
                        <span>info@lamelo.com.mg<br /> lamelo.info@gmail.com</span><br />
                        <span className="social-media-links"><a target="_blank" href="https://www.facebook.com/LAMELOnigeria/" className="facebook-icon" rel="noopener noreferrer"><FaFacebook /></a> <a target="_blank" href="https://www.twitter.com/lamelo_ng" className="twitter-icon" rel="noopener noreferrer"><FaTwitter /></a> <a target="_blank" href="https://www.instagram.com/lamelo_ng" className="instagram-icon" rel="noopener noreferrer"><FaInstagram /></a><a target="_blank" href="https://www.linkedin.com/in/lamelo-ng-4956161b4/" className="linkedin-icon" rel="noopener noreferrer"><FaLinkedin /></a></span>
                      </CardText>
                    </CardBody>
               
                </Card>
                <div className="mapbox-iframe">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15758.247589548013!2d7.4048307760740055!3d9.103612932998885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLamelo%20Restaurant%2CFirst%20Avenue%20Gwarimpa%2C%20Beside%20DBB%20Plaza%20Abuja!5e0!3m2!1sen!2sng!4v1600689399752!5m2!1sen!2sng" allowFullScreen={true} aria-hidden="false" tabIndex="0" title="lamelo-address" frameBorder="0" rel="noopener noreferrer" className="map-frame"></iframe>
                </div>  
              </div>
      <button className="call-to-action-home" onClick={() => props.history.push('/menu')}>Menu</button>
      <CartCount />
      <ScrollTop />
      </div>
         
      <Container fluid id="footer-items">
        <div className="footer">
          <Row className="other-details">
             <Col lg="12" sm="12" xs="12" md="12" className="footer-details"><center>All Right Reserved Copyright &copy; {copyRight(2020)}<br /> <p>Designed by <a href="https://www.lotzcrocoz.com.ng" target="__blank">Lotz & Crocoz Global LTD</a></p></center></Col>
          </Row>
        </div>
      </Container>
      </div>
    </div>

  )
}

export default Home;
