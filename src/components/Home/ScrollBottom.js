import React from 'react'
import { FaArrowDown } from 'react-icons/fa';

const ScrollBottom = ({height}) => {

    const scrollToBottom = () => window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    })
    return (
        <div style={{height: height, minHeight: '170vh'}}>
        <div className="down-btn" onClick={scrollToBottom}><span>Scroll Down</span><br /><FaArrowDown className="scroll-arrow"/></div>
        </div>
    )
}

export default ScrollBottom
