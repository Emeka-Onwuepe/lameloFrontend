import React, { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';
import { FaChevronUp } from 'react-icons/fa';

const ScrollTopMenu = () => {

    const { y: pageYOffset} = useWindowScroll()
    const [ visible, setVisible ] = useState(false);

    useEffect(() => {
        if(pageYOffset > 400){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

    if(!visible){
        return false
    }
    return (
      <div className="scroll-to-top-menu cursor-pointer text-center" onClick={scrollToTop}>
        <FaChevronUp />
      </div>
    )
}

export default ScrollTopMenu
