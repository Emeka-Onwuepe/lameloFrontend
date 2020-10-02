import React, { useContext, useEffect } from 'react'
import Logo2 from '../../assets/Lamelo - Emblem (curves) wht.png';
import CartCount from '../Card/CartCount';
import { storeContext } from '../State/State';
import './Menu.css';

const Menu = (props) => {
    const { storestate, storedispatch } = useContext(storeContext);
    const { scrow } = storestate

    useEffect(() => {
        //    console.log(scrow)

        const elem = document.querySelector("#wrapper2")

        elem.addEventListener("scroll", () => {
            console.log("scrolled")
        })
    }, [scrow]);
    // const  user  = User
    // window.onLoad(() => {

    // })



    // document.addEventListener('resize', onresizer)
    return (
        <div id="wrapper2">
            <div className="menu-logo"> <img src={Logo2} alt="logo2" className="logo-2" /></div>
            <div className="menupage">
                <h1 className="menu-header">Menu</h1>
            </div>
            <div className="menu-content">
                <ol className="items">
                    <div className="menu-deal">
                        <li className="menu" onClick={() => props.history.push('/pizza-page')}>Pizza page {scrow} <span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illum.</span></li>

                    </div>
                    <div className="menu-deal">
                        <li className="menu" onClick={() => props.history.push('/wings-fries-burger')}>Burger, Fries & Wings page<span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illum.</span></li>

                    </div>
                    <div className="menu-deal">
                        <li className="menu" onClick={() => props.history.push('/salad-varities')}>Salad Variety page<span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illum.</span></li>

                    </div>
                    <div className="menu-deal">
                        <li className="menu" onClick={() => props.history.push('/gelatos')}>Gelatos page
                                <span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illum.</span></li>

                    </div>
                </ol>
            </div>
            <button className="menu-call-to-action" onClick={() => props.history.push('/')}> &lt; Back</button>
            <CartCount />
        </div>
    )
}

export default Menu
