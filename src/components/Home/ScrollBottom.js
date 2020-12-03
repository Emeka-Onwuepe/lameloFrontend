import React from 'react'
import { FaArrowDown } from 'react-icons/fa';

const ScrollBottom = () => {

    const scrollToBottom = () => window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    })
    return (
        <div style={{height: '150vh', background: "#1B1D1E", width: '100%'}}>
        <div className="down-btn" onClick={scrollToBottom}><span>Scroll Down</span><br /><FaArrowDown className="scroll-arrow"/></div>
        </div>
    )
}

export default ScrollBottom
