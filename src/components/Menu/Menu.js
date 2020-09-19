import React from 'react'
import Logo2 from '../../assets/Lamelo - Emblem (curves) wht.png';
import './Menu.css';

const Menu = (props) => {
    return (
        <div id="wrapper2">
               <img src={Logo2} alt="logo2" className="logo-2"/>
                <div className="menupage">
                    <h1 className="menu-header">Menu</h1> 
                </div>
                <div>
                      <ol className="items">
                            <div className="menu-deal">
                                <li className="menu" onClick={() => props.history.push('/pizza-page')}>Pizza page <span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illum.</span></li>
                               
                            </div>
                            <div className="menu-deal">
                                <li  className="menu"  onClick={() => props.history.push('/wings-fries-burger')}>Burger, Fries & Wings page<span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illum.</span></li>
                                
                            </div>
                            <div className="menu-deal">
                                <li  className="menu" onClick={() => props.history.push('/salad-varities')}>Salad Variety page<span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illum.</span></li>
                                
                            </div>
                            <div className="menu-deal">
                                <li  className="menu" onClick={() => props.history.push('/gelatos')}>Gelatos page
                                <span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illum.</span></li>
                              
                            </div>
                        </ol>
                    </div>
              <button className="menu-call-to-action" onClick={() => props.history.push('/')}> &lt; Back</button>
        </div>
    )
}

export default Menu
