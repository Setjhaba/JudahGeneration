import React from 'react'
import "./MobileNav.css"
import { Link } from 'react-scroll'

const MobileNav = ({ isOpen, toggleMenu}) => {
  return (
    <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>

            <div className='mobile-menu-container'>
                <img className='mobilenav-logo' src='/sssets/Logo2.PNG' alt='' />

                <ul>

                <li>
                    <Link to="home" className="menu-item" spy={true} smooth={true} offset={-150} duration={500}>Home</Link>
                    </li>
                   
                    <li>
                    <Link to="about" className="menu-item" spy={true} smooth={true} offset={-150} duration={500}>About</Link>
                    </li>

                    <li>
                    <Link to="services" className="menu-item" spy={true} smooth={true} offset={-150} duration={500}>Services</Link>
                    </li>

                    <li>
                        <Link to="contact" className="menu-item" spy={true} smooth={true} offset={-150} duration={500}>Contact</Link>
                    </li>
                </ul>
                
            </div>
        </div>
    </>
  )
}

export default MobileNav
