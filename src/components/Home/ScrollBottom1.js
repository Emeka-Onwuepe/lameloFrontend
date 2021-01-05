import React from 'react'
import { FaArrowDown } from 'react-icons/fa';

const ScrollBottom1 = ({height}) => {

    const scrollToBottom = () => window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    })
    return (
        <div style={{height: height, minHeight: '170vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="down-btn1" onClick={scrollToBottom}><span>Scroll Down</span><br /><FaArrowDown className="scroll-arrow1"/></div>
        </div>
    )
}

export default ScrollBottom1
