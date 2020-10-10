import React from 'react'

import Logo2 from '../../assets/Lamelo - Emblem (curves) wht.png';
import CartCount from '../Card/CartCount';
import { storeContext } from '../State/State';
import { FaArrowDown } from 'react-icons/fa';
import './Menu.css';



const Menu = (props) => {
 

    return (
        <div id="wrapper2" >
            <div className="menu-logo"> <img src={Logo2} alt="logo2" className="logo-2" data-aos="zoom-in"  data-aos-duration="3000"/></div>
            <div className="menupage" data-aos="flip-right">
                <h1 className="menu-header">Menu</h1>
            </div>
            <div className="menu-content" >
                <ol className="items" >
                    <div className="menu-deal" data-aos="fade-up" data-aos-duration="3000">
                        <li className="menu" onClick={() => props.history.push('/pizza-page')}>Pizza page <span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illum.</span></li>

                    </div>
                    <div className="menu-deal" data-aos="fade-down" data-aos-duration="3200">
                        <li className="menu" onClick={() => props.history.push('/wings-fries-burger')}>Burger, Fries & Wings page<span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illum.</span></li>

                    </div>
                    <div className="menu-deal" data-aos="zoom-in-right" data-aos-duration="3400">
                        <li className="menu" onClick={() => props.history.push('/salad-varities')}>Salad Variety page<span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illum.</span></li>

                    </div>
                    <div className="menu-deal" data-aos="flip-right" data-aos-duration="3600">
                        <li className="menu" onClick={() => props.history.push('/gelatos')}>Gelatos page
                                <span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illum.</span></li>

                    </div>
                    <div className="menu-deal" data-aos="zoom-out" data-aos-duration="3800">
                        <li className="menu" onClick={() => props.history.push('/platter')}>Platter page
                                <span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illum.</span></li>

                    </div>
                </ol>
            </div>
            <div className="down-btn-menu" ><span>Scroll Down</span><br /><FaArrowDown className="scroll-arrow-menu"/></div>
            <button className="menu-call-to-action" onClick={() => props.history.push('/')}> &lt; Back</button>
            <CartCount />

        </div>
    )
}

export default Menu
