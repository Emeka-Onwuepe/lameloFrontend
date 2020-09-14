import React from 'react';
import Logo1 from '../../assets/LAMELŌ badge blk.png';
import bgImg from '../../assets/LAMELŌ-pattern-brn.png';

import './Home.css';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <div id="wrapper">
        <div className="border">
            <div className="center-items">
               <img src={Logo1} alt="logo1" className="logo-1"/>
               <h1 className="htext">Welcome to Lamelo Restaurant</h1>
               <p className="ptext">Lamelo Restaurant is a place where you find great and tasty <strong><Link>Burger</Link></strong>, <strong><Link>Pizza</Link></strong>, <strong><Link>Ice creams</Link></strong> <strong><Link>Chicken wings</Link></strong>, <strong><Link>Salad</Link></strong>,  <strong><Link>Shawamarma</Link></strong> and lots more.<br />Trust Lamelo Restaurant for your <i>family dinner</i>, <i>friends hangout</i>, <i>birthdays</i> and a lot more <br/>
                 Our customer service is topnotch, we are 24hrs available to receive your calls and delivery order. <br/>
                 Order now by clicking on the <em>Menu Button</em>  at the bottom right of this page.
                </p>
        
            
            </div>
        <div className="content" id="bg">
           
           <img src={bgImg} className="bg-img" alt="bg-img"/>
            <div>
              <button className="call-to-action" onClick={() => props.history.push('/menu')}>Menu</button>
              
            </div>

              <div className="color-overlay"></div>
        </div>
        </div>
        </div>
    )
}

export default Home
