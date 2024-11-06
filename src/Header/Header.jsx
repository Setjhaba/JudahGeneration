import React, { useState } from 'react'
import "./Header.css"
import MobileNav from "../MobileNav/MobileNav";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';

function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    };

    return(
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <header className="header-container">
                <nav className="navbar">
                    <div className="navbar-left">
                        <img src="/assets/Logo2.PNG" alt="" className="logo-image" />

                        <Link to="hero" spy={true} smooth={true} offset={-150} duration={500}><h1 className="header-name">Judah Generation</h1></Link>
                    </div>
                    
                        
                    <ul className="navbar-list">
                        <li><Link to="about" spy={true} smooth={true} offset={-150} duration={500}>About</Link></li>
                        <li><Link to="services" spy={true} smooth={true} offset={-100} duration={500}>Services</Link></li>
                        <li><Link to="contact" spy={true} smooth={true} offset={-300} duration={500}>Contact</Link></li>
                    </ul>
                    
                    <button className="menu-btn" onClick={toggleMenu}>{openMenu ? <CloseIcon /> : <MenuIcon />}</button>
                </nav>
            </header>
        </>
        
    )
}

export default Header