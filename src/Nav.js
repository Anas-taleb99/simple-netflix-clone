import React, { useState, useEffect } from 'react'
import './Nav.css';

function Nav() {
    const [handleShow, setHandleShow] = useState(false)
    
    const navScroll = () => {
        if(window.scrollY > 100) {
            setHandleShow(true)
        } else {
            setHandleShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', navScroll)
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])
    return (
        <div className={`nav ${handleShow && 'nav-black'}`}>
            <img
                className='nav_logo'
                src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                alt='Netflix Logo'
            />
            <img
                className='nav_avatar'
                src='https://image.flaticon.com/icons/png/512/168/168724.png'
                alt='Netflix Logo'
            />
        </div>
    )
}

export default Nav
