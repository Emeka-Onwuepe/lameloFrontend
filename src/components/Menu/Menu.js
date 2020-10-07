import React from 'react'
import { motion } from 'framer-motion';
import Logo2 from '../../assets/Lamelo - Emblem (curves) wht.png';
import CartCount from '../Card/CartCount';
import { storeContext } from '../State/State';
import './Menu.css';



const Menu = (props) => {
    const menuVariants = {
        hidden: {
            y: '-100vh',
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                mass: 0.6,
                damping: 8,
                staggerChildren: 0.4,
                when: 'beforeChildren'
            }
        }
    }

    const childVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    }

    const menuButtonVariants = {
        hover: {
            scale: 1.1,
            backgroundColor: 'green',
            color: 'orangered'
        }
    }

    return (
        <motion.div id="wrapper2" variants={menuVariants} initial="hidden" animate="visible">
            <div className="menu-logo"> <img src={Logo2} alt="logo2" className="logo-2" /></div>
            <div className="menupage">
                <h1 className="menu-header">Menu</h1>
            </div>
            <motion.div className="menu-content" variants={childVariants}>
                <ol className="items"  >
                    <div className="menu-deal">
                        <li className="menu" onClick={() => props.history.push('/pizza-page')}>Pizza page <span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illum.</span></li>

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
                    <div className="menu-deal">
                        <li className="menu" onClick={() => props.history.push('/platter')}>Platter page
                                <span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illum.</span></li>

                    </div>
                </ol>
            </motion.div>
            <motion.button variants={menuButtonVariants} whileHover="hover" className="menu-call-to-action" onClick={() => props.history.push('/')}> &lt; Back</motion.button>
            <CartCount />

        </motion.div>
    )
}

export default Menu
