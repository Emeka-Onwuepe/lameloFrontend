import React from 'react'
import { FaArrowDown } from 'react-icons/fa';

const ScrollBottom = () => {

    const scrollToBottom = () => window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    })
    return (
        <div className="down-btn" onClick={scrollToBottom}><span>Scroll Down</span><br /><FaArrowDown className="scroll-arrow"/></div>
    )
}

export default ScrollBottom
